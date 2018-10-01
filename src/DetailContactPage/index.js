import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import PrivateRoute from "../PrivateRoute";

export default class DetailContactPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contact: {},
            linkedInFriends: "false"
        }
    }

    componentDidMount = async () => {
        const id = this.props.match.params.id
        const findContactInfo = await fetch(`/api/contacts/${id}`)
        const contactInfo = await findContactInfo.json()
        this.setState({
            contact: contactInfo
        })
        // if (/\r?\n/.test(this.state.contact.conversationDetails)) {
        //     const convertedDetails = this.state.conversationDetails.replace(/\r?\n/g, '<br />')
        //     this.setState({
        //         conversationDetails: convertedDetails
        //     })
        // } else {
        //     this.setState({
        //         conversationDetails: this.state.contact.conversationDetails
        //     })
        // }
        if (this.state.contact.linkedInFriends === true) {
            this.setState({
                linkedInFriends: "true"
            })
        }
    }

    render() {
        console.log(this.props.match.params.id, this.state.contact)
        console.log(this.state.contact.conversationDetails);
        const { name, contactInfo, whereYouMet, importance, conversationDetails } = this.state.contact
        return (
            <div>
                <h1>{name}</h1>
                <h2>{contactInfo}</h2>
                <h2>{whereYouMet}</h2>
                Importance <p>{importance}</p>
                {/* {conversationDetails.match(/\n/g) && <ul>conversationDetails</ul>} */}
                {conversationDetails}
                <p>Connected on LinkedIn? <span>{this.state.linkedInFriends}</span></p>
                <Link to={'/editcontact/' + this.props.match.params.id} ><button>Edit</button></Link>
            </div>
        )
    }
}
