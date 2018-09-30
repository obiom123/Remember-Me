import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Redirect } from 'react-router-dom';


export default class LoginOrRegistration extends Component {
  constructor(props) {
    super(props)

    this.state = {
      loggedIn: false,
      errorMessage: '',
    }
  }

  register = async () => {

    if (this.props.emailValid && this.props.passwordValid) {
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
    else {
     console.log('email or password invalid')
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
    // if (this.state.loggedIn) {
    //   const { from } = this.props.location.state || { from: { pathname: "/" } };
    //   return (
    //     <Redirect to={from} />
    //   )
    // }
    return (
      <div className="form-container">
        <form>

          <label className="login-label email">Email</label>
          <input className="login-input email" type="text" name="userEmail" onChange={this.props.onInputChange} />
          {!this.props.emailValid && (
              <div className="">
                <p> enter valid email</p>
              </div>
            )}
          <label className="login-label password">Password</label>
          <input className="login-input password" type="text" name="password" onChange={this.props.onInputChange} />
          {!this.props.passwordValid && (
              <div className="">
                <p> enter valid password</p>
              </div>
            )}
            
          <button type="button" onClick={this.register}>Register</button>
          <button type="button" onClick={this.logIn}>Log in</button>
          <p>{this.state.errorMessage}</p>
        </form>
      </div>
    )
  }
}
