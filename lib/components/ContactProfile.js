import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import firebase from 'firebase';
import Link from './Link';

export default class ContactProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      followUp: this.props.contact['followUp'],
    }
  }

  handleChange(contact, user) {
    let singleUser = user['user']['uid']
    firebase.database().ref(singleUser).child(contact['firebaseId']).update({ followUp: this.state.followUp})
  }

  render() {
    let { contact, user } = this.props

    return (
      <section id="contact-profile-container">

        <Link to='/'>
          <button className='button'
                  id='close-form-btn'
                  aria-label='close-form-button'
                  onClick={this.props.handleClick}>X</button>
        </Link>

        <h6 >{contact['firstName']}</h6>
        <h6>{contact['lastName']}</h6>
        <h6>{contact['company']}</h6>
        <h6>{contact['email1']}</h6>
        <h6>{contact['email2']}</h6>
        <h6>{contact['mobile']}</h6>
        <h6>{contact['home']}</h6>
        <h6>{contact['work']}</h6>

        <input id="checkbox-contact-profile"
               type="checkbox"
               checked={this.state.followUp}
               onChange={() => {
                 this.setState({ followUp: !this.state.followUp }, () => {
                   this.handleChange(contact, user)
                 })
               }}/>

{/* this.handleChange(contact, user) */}

      </section>
    )
  }
}
