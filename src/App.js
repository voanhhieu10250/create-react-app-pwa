import "./App.css";
import About from "./about";
import Home from "./home";
import Users from "./users";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

function App() {
  const [btnState, setBtnState] = useState(false);
  const deferredPrompt = useRef();

  console.log(btnState);
  useEffect(() => {
    window.addEventListener("beforeinstallprompt", (e) => {
      e.preventDefault();
      deferredPrompt.current = e;
      setBtnState(true); // hiện nút install khi browser nhận thấy device đủ điều kiện và chưa có install app hoặc khi người dùng bấm cancel install
    });
  }, []);

  const handleClickInstall = () => {
    setBtnState(false);
    deferredPrompt.current.prompt();
    deferredPrompt.current.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === "accepted") {
        console.log("User accepted the A2HS prompt");
      } else {
        console.log("User dismissed the A2HS prompt");
      }
      deferredPrompt.current = null;
    });
  };

  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </header>
        <div>
          <button onClick={handleClickInstall} hidden={!btnState}>
            Install this app to your device
          </button>
        </div>
        <Switch>
          <Route path="/about" component={About}></Route>
          <Route path="/users" component={Users}></Route>
          <Route path="/" component={Home}></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
