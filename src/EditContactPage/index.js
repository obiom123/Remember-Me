import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import PrivateRoute from "../PrivateRoute";

export default class EditContactPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: "",
      contactInfo: "",
      whereYouMet: "",
      importance: "",
      linkedInFriends: "",
      conversationDetails: "",
      submittedEditContact: false
    }
  }

  onInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  componentDidMount = async () => {
    const id = this.props.match.params.id
    const findContactInfo = await fetch(`/api/contacts/${id}`)
    const contactInfo = await findContactInfo.json()
    this.setState({
        name: contactInfo.name,
        contactInfo: contactInfo.contactInfo,
        whereYouMet: contactInfo.whereYouMet,
        importance: contactInfo.importance,
        linkedInFriends: contactInfo.linkedInFriends,
        conversationDetails: contactInfo.conversationDetails,
    })
  }

  editContact = async () => {
    const id = this.props.match.params.id
    const body = JSON.stringify({
      name: this.state.name,
      contactInfo: this.state.contactInfo,
      whereYouMet: this.state.whereYouMet,
      importance: this.state.importance,
      linkedInFriends: this.state.linkedInFriends,
      conversationDetails: this.state.conversationDetails,
    });

    const newContact = await fetch(`/api/contacts/${id}`, {
      method: 'PUT',
      body: body,
      headers: {
        'Content-Type': 'application/json',
      }
    });

    const newContactInfo = await newContact.json();

    this.setState({
      submittedEditContact: true
    })
  }
  
  onSubmit = (e) => {
    e.preventDefault();
  }


  render() {
    if (this.state.submittedEditContact) {
        const { from } = this.props.location.state || { from: { pathname: `/detailcontact/${this.props.match.params.id}` } };
      return (
        <Redirect to={from} />
      )
    }
    return (
      <div className="edit-form-container">
        <h1>Edit Contact Page</h1>
        <form onSubmit={this.onSubmit}>
          <label className="edit-label edit-name-label">Name</label>
          <input className="edit-input name" type="text" name="name" value={this.state.name} onChange={this.onInputChange} />
          <br></br>
          <label className="edit-label edit-contactInfo-label">Email/Phone#/Other</label>
          <input className="inputContactInfo" type="text" name="contactInfo" value={this.state.contactInfo} onChange={this.onInputChange} />
          <br></br>
          <label className="edit-label edit-contactWhereYouMet-label">Where You Met</label>
          <input className="inputWhereYouMet" type="text" name="whereYouMet" value={this.state.whereYouMet} onChange={this.onInputChange} />
          <br></br>
          <label className="edit-label edit-contactImportance-label">Importance</label>
          <input className="inputImportance" type="text" name="importance" value={this.state.importance} onChange={this.onInputChange} />
          <br></br>
          <label className="edit-label edit-LinkedInFriends-label">LinkedIn Friends?</label>
          <input className="inputLinkedInFriends" type="text" name="linkedInFriends" value={this.state.linkedInFriends} onChange={this.onInputChange} />
          <br></br>
          <label className="edit-label edit-ConversationDetails-label">Conversation Details</label>
          <textarea className="inputConversationDetails" name="conversationDetails" value={this.state.conversationDetails} onChange={this.onInputChange} rows="10" cols="60"/>
          <br></br>
          <button onClick={this.editContact}>Submit</button>
        </form>
      </div>
    )
  }
}
