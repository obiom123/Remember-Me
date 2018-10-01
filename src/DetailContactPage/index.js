import React, { Component } from 'react'
import "./style.css"
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';
import PrivateRoute from "../PrivateRoute";

export default class DetailContactPage extends Component {
    constructor(props) {
        super(props)

        this.state = {
            contact: {},
            deleteContact: false
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

    deleteContact = async () => {
        const id = this.props.match.params.id
        const deleteContactInfo = await fetch(`/api/contacts/${id}`, {
            method: 'DELETE',
        });
        this.setState({
            deleteContact: true
        })
    }

    render() {
        const { name, contactInfo, whereYouMet, importance, linkedInFriends, conversationDetails } = this.state.contact
        let convertedDetails = null
        let booleanText = null
        if (conversationDetails) {
            convertedDetails = conversationDetails.replace(/\r?\n/g, '<br />')
            if (linkedInFriends) {
                booleanText = "Yes"
            } else {
                booleanText = "No"
            }
        }
        if (this.state.deleteContact) {
            return (
              <Redirect to="/" />
            )
          }
        return (
            <div>
                <div className="all-form-containers">
                    <p className="detail-info detail-name" >{name}</p>
                    <p className="detail-info">{contactInfo}</p>
                    <p className="detail-info">{whereYouMet}</p>
                    Importance <p>{importance}</p>
                    <div dangerouslySetInnerHTML={{ __html: convertedDetails }} />
                    <p>Connected on LinkedIn? <span>{booleanText}</span></p>
                    <Link to={'/editcontact/' + this.props.match.params.id} ><button>Edit</button></Link>
                    <button onClick={this.deleteContact} >Delete</button>
                </div>
            </div>
        )
    }
}
