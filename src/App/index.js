import React, { Component } from "react";
import Registration from "Registration";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginOrRegistration from "../LoginOrRegistration";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
        <h1> Hello World app page</h1>
          <nav> 
        <Link to="/LoginOrRegistration">Login</Link>
          </nav>
        <Route path="/LoginOrRegistration" exact component={LoginOrRegistration} />

        </div>
    </Router>
    )
  }
}

export default App;
