export default function swDev() {
  // https://tools.reactpwa.com/vapid
  // https://www.npmjs.com/package/web-push

  function determineAppServerKey() {
    var vapidPublicKey =
      "BHBMYMTSOJ_2VWq1Ekitl4Rv48ryXgjGbNsOe3uhC-T1H7YZdlcF9mvOs34SiCbZPJccUt4GIEA4cr5uKgWjLwE";
    return urlBase64ToUint8Array(vapidPublicKey);
  }

  function urlBase64ToUint8Array(base64String) {
    const padding = "=".repeat((4 - (base64String.length % 4)) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, "+")
      .replace(/_/g, "/");

    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);

    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  let swUrl = `${process.env.PUBLIC_URL}/sw.js`;
  navigator.serviceWorker.register(swUrl).then((response) => {
    // console.log("response", response);
    return response.pushManager.getSubscription().then(() => {
      return response.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: determineAppServerKey(),
      });
    });
  });
}
