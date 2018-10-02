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
                <Link to="/"><img className="exit-button" src={"/images/button-exit.png"}/></Link>
                <div className="all-form-containers">
                    
                    <p className="detail-info-label detail-name" ><span className="detail-info">{name}</span></p>
                    <p className="detail-info-label"><span>{contactInfo}</span></p>
                    <p className="detail-info-label">WE MET AT: <span className="detail-info">{whereYouMet}</span></p>
                    <p className="detail-info-label">Importance: <span className="detail-info">{importance}</span></p>
                    <div className="detail-info-label" dangerouslySetInnerHTML={{ __html: convertedDetails }} />
                    <p className="detail-info-label">Connected on LinkedIn? <span className="detail-info">{booleanText}</span></p>

                    <div className="edit-button-container">
                        {/* <Link className="button" to={'/editcontact/' + this.props.match.params.id} ><button>Edit</button></Link> */}
                        <button className="button"><Link className="link"to={'/editcontact/' + this.props.match.params.id} >Edit</Link></button>
                        <button className="button" onClick={this.deleteContact} >Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}
