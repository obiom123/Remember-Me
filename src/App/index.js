import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import LoginOrRegistration from "../LoginOrRegistration";
import Contacts from "../Contacts";
import PrivateRoute from "../PrivateRoute";



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userLoggedIn: false,
      userEmail: "",
      password: "",
    }
  }

  onLogIn = () => {
    this.setState({
      userLoggedIn: true,
    });
  }

  onInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Route
            path="/login"
            render={(props) => <LoginOrRegistration {...props} userEmail={this.state.userEmail} password={this.state.password} onLogIn={this.onLogIn} onInputChange={this.onInputChange} />}
          />
          <PrivateRoute path="/" exact component={Contacts} />
        </div>
      </Router>
        )
      }
    }
    
    export default App;
