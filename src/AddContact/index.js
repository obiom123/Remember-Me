import React, { Component } from 'react'
import "./style.css"





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
    }
  }

  onInputChange = evt => {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  // submitForm = () => {

  // }


render() {
  return (
    <div className="inputForm-container"> 
    <h1> Add New Contact Page</h1>
       <form>  
            <label className="add-label add-name-label">Name</label>
            <input className="inputName" type="text" name="name" onChange={this.onInputChange}/>
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
            <button onClick={this.submitForm}>Submit</button>
        </form>
    </div>
  )
}
}