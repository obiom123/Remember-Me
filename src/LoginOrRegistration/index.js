import React, { Component } from 'react'
import "./style.css"

export default class LoginOrRegistration extends Component {

register = async () => {
  const body = JSON.stringify({
    userEmail: this.props.userEmail,
    password: this.props.password
  });
  const addUser = await(await fetch('/api/register', {
    method: "POST",
    body: body,
    headers: {
      'Content-Type': 'application/json'
    }
  })).json();

  localStorage.setItem('user-jwt', addUser);
  this.props.onLogIn();
}


  render() {
    return (
      <div className="form-container">
        <form>  
            <label className="label">Email</label>
            <input className="input" type="text" name="userEmail" onChange={this.props.onInputChange}/>
            <label>Password</label>
            <input className="input" type="text" name="password" onChange={this.props.onInputChange}/>
            <button type="button" onClick={this.register}>Register</button>
            <button type="button" onClick={this.logIn}>Log in</button>
        </form>
      </div>
    )
  }
}
