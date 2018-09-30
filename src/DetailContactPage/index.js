import React, { Component } from 'react'
import "./style.css"

export default class DetailContactPage extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         contact: {}
      }
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id
        const findContactInfo = await fetch(`/api/contacts/${id}`)
        const contactInfo = await findContactInfo.json()
        this.setState({
            contact: contactInfo
        })
    }
    
  render() {
        // console.log(this.props.match.params.id, this.state.contact)
        const { name, contactInfo, whereYouMet, importance, conversationDetails, linkedInFriends } = this.state.contact
    return (
      <div>
        <h1>{name}</h1>
        <h2>{contactInfo}</h2>
      </div>
    )
  }
}
