import React from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About"
import Contact from "./Pages/Contact/Contact"

const App = () => (
  <Router>
    <div className="container">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Me</Link>
        </li>
        <li>
          <Link to="/contact">Contact Me</Link>
        </li>
      </ul>
    </div>
    <Switch>
      <Route path="/about">
        <About />
      </Route>
      <Route path="/">
        <Home />
      </Route>
      <Route path="/contact">
        <Contact />
      </Route>
    </Switch>
  </Router>
);

render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);

export default App;
