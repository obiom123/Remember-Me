import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import AddContact from "../AddContact";


export default class Contacts extends Component {

render() {
  return (
    <Router>
      <nav>
      <Link to="/AddContact">AddContact</Link>
      </nav>

      <Route path="/AddContact" exact component={AddContact} />

      <div className="Contacts">
        <h1>✚ Contacts</h1>
      </div>
    </Router>
  )
}
}