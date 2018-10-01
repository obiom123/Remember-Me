import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import AddContact from "../AddContact";
import PrivateRoute from "../PrivateRoute";
import DetailContactPage from "../DetailContactPage";


export default class ContactsListPage extends Component {
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
      <div className="all-form-containers">
        <nav>
          <Link to="/addcontact">AddContact</Link>
        </nav>
        <h1> Contacts</h1>
        {this.state.contacts.map(contact => <Link className="each-contact-name" to={'/detailcontact/' + contact.id} ><p className="each-contact-name" key={contact.id} >{contact.name}</p></Link>)}
        </div>
      </div>
    )
  }
}