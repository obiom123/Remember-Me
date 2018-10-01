import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddContact from "../AddContact";


export default class Contacts extends Component {
  constructor(props) {
    super(props)

    this.state = {
      contacts: []
    }
  }

  componentDidMount = async () => {
    
    const allContacts = await fetch('/api/current-user/contacts', {
      method: 'GET',
      headers: {
        'jwt-token': localStorage.getItem('user-jwt')
      }
    })

    const allContactsInfo = await allContacts.json();
    this.setState({
      contacts: allContactsInfo
    })
  }

  render() {
    return (
        <div className="Contacts">
          <nav>
            <Link to="/addcontact">AddContact</Link>
          </nav>
          <div className="form-addContact">
          {this.state.contacts.map(contact => <p className="each-contact-name" key={contact.id} >{contact.name}</p>)}
          </div>
        </div>
    )
  }
}