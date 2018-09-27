import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginOrRegistration from "../LoginOrRegistration";


class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      userEmail: "",
      password: "",
    }
  }
  render() {
    return (
      <Router>
        <div className="App">
          <nav> 
        <Link to="/LoginOrRegistration">Login</Link>
          </nav>
          <br></br>
        <Route path="/LoginOrRegistration" exact component={LoginOrRegistration} />

        </div>
    </Router>
    )
  }
}

export default App;
