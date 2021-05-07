import "./App.css";
import About from "./about";
import Home from "./home";
import Users from "./users";
import { Link, Route, BrowserRouter, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/users">Users</Link>
        </header>
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
