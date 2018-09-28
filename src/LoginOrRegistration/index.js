import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


export default class LoginOrRegistration extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false,
      errorMessage: ''
    }
  }

  register = async () => {
    const body = JSON.stringify({
      userEmail: this.props.userEmail,
      password: this.props.password
    });
    const addUserResponse = await fetch('/api/register', {
      method: "POST",
      body: body,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const addUserBody = await addUserResponse.json();

    if (addUserResponse.status === 409 || addUserResponse.status === 400) {
      this.setState({
        errorMessage: addUserBody.message
      })
    } else {
      localStorage.setItem('user-jwt', addUserBody);
      this.setState({
        loggedIn: true
      })
      console.log('hi');
    }

  }

  logIn = async () => {
    const body = JSON.stringify({
      userEmail: this.props.userEmail,
      password: this.props.password
    });

    const checkUserResponse = await fetch('/api/login', {
      method: 'POST',
      body: body,
      headers: {
        'Content-Type': 'application/json'
      }
    });

    const checkUserBody = await checkUserResponse.json();

    if (checkUserResponse.status === 409 || checkUserResponse.status === 401 || checkUserResponse.status === 400) {
      this.setState({
        errorMessage: checkUserBody.message
      })
    } else {
      localStorage.setItem('user-jwt', checkUserBody);
      this.setState({
        loggedIn: true
      })
      
    }
    // localStorage.setItem('user-jwt', JSON.stringify(jwtToken));
  }



  render() {
    if (this.state.loggedIn) {
      const { from } = this.props.location.state || { from: { pathname: "/" } };
      return (
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
          <p>{this.state.errorMessage}</p>
        </form>
      </div>
    )
  }
}
