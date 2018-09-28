import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddContact from "../AddContact";
import PrivateRouteContacts from "../PrivateRouteContacts";




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
    console.log(allContactsInfo)
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
          <h1>✚ Contacts</h1>
          {this.state.contacts.map(contact => <h1 key={contact.id} >{contact.name}</h1>)}
        </div>
    )
  }
}