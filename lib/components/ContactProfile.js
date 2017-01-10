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

        {/* <h6>{this.displayRecords(contact)}</h6> */}

        <Button text="Edit" handleClick={() => this.setState({ edit: !this.state.edit })} />

        <h6 contentEditable={this.state.edit} >{contact['firstName']}</h6>
        <h6 contentEditable={this.state.edit} >{contact['lastName']}</h6>
        <h6 contentEditable={this.state.edit} >{contact['company']}</h6>
        <h6 contentEditable={this.state.edit} >{contact['email1']}</h6>
        <label>Secondary Email: <h6 contentEditable={this.state.edit} >{contact['email2']}</h6></label>
        <h6 contentEditable={this.state.edit} >{contact['mobile']}</h6>
        <h6 contentEditable={this.state.edit} >{contact['work']}</h6>
        <h6 contentEditable={this.state.edit} >{contact['home']}</h6>
        <h6 contentEditable={this.state.edit} >{contact['facebook']}</h6>
        <h6 contentEditable={this.state.edit} >{contact['linkedIn']}</h6>
        <h6 contentEditable={this.state.edit} >{contact['twitter']}</h6>
        <h6 contentEditable={this.state.edit} >{contact['github']}</h6>
        <h6 contentEditable={this.state.edit} >{contact['notes']}</h6>

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
