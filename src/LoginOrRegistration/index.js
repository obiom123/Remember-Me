import React, { Component } from 'react'
import "./style.css"

export default class LoginOrRegistration extends Component {
constructor(props) {
  super(props)

  this.state = {
     newUsername: "",
     newPassword: "",
  }
}


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
>>>>>>> 354b88722c4f1a7b8885eefe3fe7776fe365a3d7
    )
  }
}
