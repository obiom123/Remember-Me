import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddContact from "../AddContact";


export default class Contacts extends Component {

render() {
  return (
    <Router>
      <div className="Contacts">
      <nav>
        <Link to="/AddContact">AddContact</Link>
      </nav>

      <Route path="/AddContact" exact component={AddContact} />
        <h1>✚ Contacts</h1>
      </div>
    </Router>
  )
}
}