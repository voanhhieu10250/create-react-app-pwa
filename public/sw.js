let cacheData = "appV1";

const limitCacheSize = (name, size) => {
  caches.open(name).then((cache) => {
    cache.keys().then((keys) => {
      if (keys.length > size) {
        cache.delete(keys[0]).then(limitCacheSize(name, size));
      }
    });
  });
};

self.addEventListener("install", (e) => {
  console.log("Service worker: installed");
  e.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/manifest.json",
        "/static/js/bundle.js",
        "/static/js/main.chunk.js",
        "/static/js/vendors~main.chunk.js",
        "/index.html",
        "/",
        "/users",
      ]);
    })
  );
});

self.addEventListener("activate", (e) => {
  console.log("Service worker: activated");
  e.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== cacheData) {
            console.log("Service worker: Cleaning old cache");
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

self.addEventListener("fetch", (e) => {
  console.log("Service worker: Fetching");
  // check if request is made by chrome extensions or web page
  // if request is made for web page url must contains http.
  if (!(e.request.url.indexOf("http") === 0)) return; // skip the request. if request is not made with http protocol
  if (!navigator.onLine) {
    e.respondWith(
      caches.match(e.request).then((resp) => {
        if (resp) {
          return resp;
        }
      })
    );
  } else {
    e.respondWith(
      fetch(e.request)
        .then((res) => {
          const resClone = res.clone();
          return caches.open(cacheData).then((cache) => {
            cache.put(e.request, resClone);
            limitCacheSize(cacheData, 41);
            return res;
          });
        })
        .catch((err) =>
          caches
            .match(e.request)
            .then((res) => res)
            .catch((err) =>
              console.log("Service worker: this request doesn't exist in cache")
            )
        )
    );
  }
});
