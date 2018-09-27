import React, { Component } from 'react'
import "./style.css"

export default class LoginOrRegistration extends Component {

  render() {
    return (
      <div className="form-container">
        <form>  
            <label className="label">Username</label>
            <input className="input" type="text" name="newUsername" onChange={this.props.handleChange}/>
            <label>Password</label>
            <input className="input" type="text" name="newPassword" onChange={this.props.handleChange}/>
            <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}
