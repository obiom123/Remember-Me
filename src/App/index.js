import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginOrRegistration from "../LoginOrRegistration";


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
        {!this.state.userLoggedIn && 
          <Route 
          path="/" 
          render={(props) => <LoginOrRegistration {...props} userEmail={this.state.userEmail} password={this.state.password} onLogIn={this.onLogIn} onInputChange={this.onInputChange} />}
          />}
          {/* <nav> 
        <Link to="/LoginOrRegistration">Login</Link>
          </nav>
          <br></br>
        <Route path="/LoginOrRegistration" exact component={LoginOrRegistration} /> */}
        </div>
    </Router>
    )
  }
}

export default App;
