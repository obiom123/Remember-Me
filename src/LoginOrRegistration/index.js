import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


export default class LoginOrRegistration extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false
    }
  }

  register = async () => {
    const body = JSON.stringify({
      userEmail: this.props.userEmail,
      password: this.props.password
    });
    const addUser = await fetch('/api/register', {
      method: "POST",
      body: body,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const addUserJson = await addUser.json();

    localStorage.setItem('user-jwt', addUserJson);
    this.setState({
      loggedIn: true
    })
  }


  render() {
    if (this.state.loggedIn) {
      const { from } = this.props.location.state || { from: { pathname: "/" } };
      return(
        <Redirect to={from} />
      )
    }
    return (
      <div className="form-container">
        <form>
          <label className="label">Email</label>
          <input className="input" type="text" name="userEmail" onChange={this.props.onInputChange} />
          <label>Password</label>
          <input className="input" type="text" name="password" onChange={this.props.onInputChange} />
          <button type="button" onClick={this.register}>Register</button>
          <button type="button" onClick={this.logIn}>Log in</button>
        </form>
      </div>
    )
  }
}
