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

  sortByImportance = async () => {
    const allContactsImportance = await fetch('/api/current-user/contacts/important', {
      method: 'GET',
      headers: {
        'jwt-token': localStorage.getItem('user-jwt')
      }
    })

    const allContactsInfoImportance = await allContactsImportance.json();

    this.setState({
      contacts: allContactsInfoImportance
    })
  }

  sortByDateAdded = async () => {
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
           <button onClick={this.sortByImportance}>Sort By Importance </button>
           <button onClick={this.sortByDateAdded}>Sort By Date Added </button>
        </nav>
        <p className="contact-header"> Contacts</p>
        {this.state.contacts.map(contact => <Link className="each-contact-name" to={'/detailcontact/' + contact.id} ><p className="each-contact-name" key={contact.id} >{contact.name}</p></Link>)}
        </div>
      </div>
    )
  }
}