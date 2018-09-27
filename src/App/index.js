import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginOrRegistration from "../LoginOrRegistration";
import Contacts from "../Contacts";
import AddContact from "../AddContact";





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
        <br></br>
        <Link to="/Contacts">Contacts</Link>
        <br></br>
        <Link to="/AddContact">AddContact</Link>
          </nav>
          
        <Route path="/LoginOrRegistration" exact component={LoginOrRegistration} />
        <Route path="/Contacts" exact component={Contacts} />
        <Route path="/AddContact" exact component={AddContact} />


        </div>
    </Router>
    )
  }
}

export default App;
