import React, { Component } from "react";
import Header from "./Components/header";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Home from './Pages/Home/Home';
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/Notfound"
import "./app.css"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Header />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/contact" component={Contact} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
