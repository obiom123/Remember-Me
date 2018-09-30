import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';

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

    localStorage.setItem('add-contact', 'true')
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
        <h1> Add New Contact Page</h1>
        <form onSubmit={this.onSubmit}>
          <label className="add-label add-name-label">Name</label>
          <input className="add-input name" type="text" name="name" onChange={this.onInputChange} />
          <br></br>
          <label className="add-label add-contactInfo-label">Email/Phone#/Other</label>
          <input className="inputContactInfo" type="text" name="contactInfo" onChange={this.onInputChange} />
          <br></br>
          <label className="add-label add-contactWhereYouMet-label">Where You Met</label>
          <input className="inputWhereYouMet" type="text" name="whereYouMet" onChange={this.onInputChange} />
          <br></br>
          <label className="add-label add-contactImportance-label">Importance</label>
          <input className="inputImportance" type="text" name="importance" onChange={this.onInputChange} />
          <br></br>
          <label className="add-label add-LinkedInFriends-label">LinkedIn Friends?</label>
          <input className="inputLinkedInFriends" type="text" name="linkedInFriends" onChange={this.onInputChange} />
          <br></br>
          <label className="add-label add-ConversationDetails-label">Conversation Details</label>
          <input className="inputConversationDetails" type="text" name="conversationDetails" onChange={this.onInputChange} />
          <br></br>
          <button onClick={this.addThisContact}>Submit</button>
        </form>
      </div>
    )
  }
}