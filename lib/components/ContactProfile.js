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
      edit: false,
    }
  }

  handleChange(user, contact) {
    let singleUser = user['user']['uid']
    firebase.database().ref(singleUser).child(contact['firebaseId']).update({ followUp: this.state.followUp})
  }

  displayRecords(contact) {
    let keys = Object.keys(contact)
    let newArray = keys.map((key, i) => {
      if(key !== 'firebaseId') {
        return (
          <p key={i} className='profile-record'>{contact[key]}</p>
        )
      }
    })
    return newArray
  }

  render( ) {
    let {contact, handleClick, user} = this.props;

    return (
      <section id="contact-profile-container">

        <Link to='/'>
        <button className='button'
          id='close-form-btn'
          aria-label='close-form-button'
          onClick={handleClick}>X</button>
        </Link>

        <label className='contact-profile-label'>First Name: </label>
        <h6 className='contact-profile-record'>{contact['firstName']}</h6>

        <label className='contact-profile-label'>Last Name: </label>
        <h6 className='contact-profile-record'>{contact['lastName']}</h6>

        <label className='contact-profile-label'>Company: </label>
        <h6 className='contact-profile-record'>{contact['company']}</h6>

        <label className='contact-profile-label'>Email: </label>
        <h6 className='contact-profile-record'>{contact['email1']}</h6>

        <label className='contact-profile-label'>Secondary Email: </label>
        <h6 className='contact-profile-record'>{contact['email2']}</h6>

        <label className='contact-profile-label'>Mobile #: </label>
        <h6 className='contact-profile-record'>{contact['mobile']}</h6>

        <label className='contact-profile-label'>Work #: </label>
        <h6 className='contact-profile-record'>{contact['work']}</h6>

        <label className='contact-profile-label'>Home: </label>
        <h6 className='contact-profile-record'>{contact['home']}</h6>

        <label className='contact-profile-label'>Facebook: </label>
        <h6 className='contact-profile-record'>{contact['facebook']}</h6>

        <label className='contact-profile-label'>LinkedIn: </label>
        <h6 className='contact-profile-record'>{contact['linkedIn']}</h6>

        <label className='contact-profile-label'>Twitter: </label>
        <h6 className='contact-profile-record'>{contact['twitter']}</h6>

        <label className='contact-profile-label'>GitHub: </label>
        <h6 className='contact-profile-record'>{contact['github']}</h6>

        <label className='contact-profile-label'>Notes: </label>
        <h6 className='contact-profile-record'>{contact['notes']}</h6>

        <label>
          Follow Up:
          <input id="checkbox-contact-profile"
            type="checkbox"
            checked={this.state.followUp}
            onChange={() => this.setState({ followUp: !this.state.followUp}, () => {this.handleChange(user, contact)})
          }/>
        </label>

      </section>
    )
  }
}
