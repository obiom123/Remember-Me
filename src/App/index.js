import React, { Component } from "react";
import "./style.css";
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import LoginOrRegistration from "../LoginOrRegistration";
import ContactsListPage from "../ContactsListPage";
import PrivateRoute from "../PrivateRoute";
import AddContact from "../AddContact";
import DetailContactPage from "../DetailContactPage";


class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      // userLoggedIn: false,
      userEmail: "",
      password: "",
    }
  }

  // I think we can get rid of this.state.userLoggedIn and onLogIn() because we have loggedIn on LoginOrRegistration component
  // If we want to have logout button then we should keep the userLoggedIn state on app
  // onLogIn = () => {
  //   this.setState({
  //     userLoggedIn: true,
  //   });
  // }

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
          <PrivateRoute path="/addcontact" exact component={AddContact} />
          <PrivateRoute path="/" exact component={ContactsListPage} />
          <PrivateRoute path="/detailcontact/:id" exact component={DetailContactPage} />
        </div>
      </Router>
    )
  }
}

export default App;
