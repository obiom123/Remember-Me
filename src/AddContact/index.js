import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import PrivateRoute from "../PrivateRoute";

export default class AddContact extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      contactInfo: "",
      whereYouMet: "",
      importance: "",
      linkedInFriends: "",
      conversationDetails: "",
      submittedAddContact: false
    }
  }

  onInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  addThisContact = async () => {
    const body = JSON.stringify({
      name: this.state.name,
      contactInfo: this.state.contactInfo,
      whereYouMet: this.state.whereYouMet,
      importance: this.state.importance,
      linkedInFriends: this.state.linkedInFriends,
      conversationDetails: this.state.conversationDetails,
    });

    const checkUserResponse = await fetch('/api/contacts', {
      method: 'POST',
      body: body,
      headers: {
        'Content-Type': 'application/json',
        'jwt-token': localStorage.getItem('user-jwt')
      }
    });

    const checkUserBody = await checkUserResponse.json();

    this.setState({
      submittedAddContact: true
    })
  }
  
  onSubmit = (e) => {
    e.preventDefault();
  }


  render() {
    if (this.state.submittedAddContact) {
      return (
        <Redirect to="/" />
      )
    }
    return (
      <div className="inputForm-container">

        <form className="form-addContact all-form-containers" onSubmit={this.onSubmit}>
          <label for="input-name" className="add-label add-name-label">Full Name/Nickname</label>
          <input id="input-name" className="add-input name" type="text" name="name" onChange={this.onInputChange} />
          <br></br>
          <label for="input-ContactInfo" className="add-label add-contactInfo-label">Email/Phone#/Other</label>
          <input id="input-ContactInfo" className="add-input inputContactInfo" type="text" name="contactInfo" onChange={this.onInputChange} />
          <br></br>
          <label for="input-WhereYouMet" className="add-label add-contactWhereYouMet-label">Event/Location of Initial Meeting</label>
          <input id="input-WhereYouMet" className="add-input inputWhereYouMet" type="text" name="whereYouMet" onChange={this.onInputChange} />
          <br></br>
          <label for="input-Importance" className="add-label add-contactImportance-label">Importance (1-10)</label>
          <input id="input-Importance" className="add-input inputImportance" type="text" name="importance" onChange={this.onInputChange} />
          <br></br>
          <label for="input-LinkedInFriends" className="add-label add-LinkedInFriends-label">Connected LinkedIn Friends? (Y/N)</label>
          <input id="input-LinkedInFriends" className="add-input inputLinkedInFriends" type="text" name="linkedInFriends" onChange={this.onInputChange} />
          <br></br>
          <label className="add-label add-ConversationDetails-label">Conversation Details</label>
          <textarea className="inputConversationDetails" name="conversationDetails" onChange={this.onInputChange} rows="10" cols="60"/>
          <br></br>
          <button onClick={this.addThisContact}>Add Contact</button>
        </form>
      </div>
    )
  }
}