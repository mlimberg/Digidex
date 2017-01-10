import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import firebase from 'firebase';
import Link from './Link';


export default class NewContactForm extends Component {
  constructor() {
    super();
      this.state = {
        followUp: false,
      }
  }

  updateContact(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  storeContact(contact) {
    let user = this.props.user
    let keys = Object.keys(user)
    let userId = user['user'].uid
    if(contact.firstName) {
      firebase.database().ref(userId).push(contact)
    }
  }

  render() {
    return (
      <div>
        <section id='contact-form'>

          <Link to='/'>
            <button className='button' id='close-form-btn' aria-label="close-form-button">X</button>
          </Link>

          <Input className="input-field input-first-name"
                 name="firstName"
                 aria-label="firstName"
                 type="text"
                 label="First Name: "
                 handleChange={this.updateContact.bind(this)} />

          <Input className="input-field input-last-name"
                 name="lastName"
                 aria-label="lastName"
                 type="text"
                 label="Last Name: "
                 handleChange={this.updateContact.bind(this)}/>

          <Input label="Company: "
                 name="company"
                 aria-label="companyName"
                 className="input-field input-company"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <Input label="Primary Email: "
                 name="email1"
                 aria-label="primaryEmail"
                 className="input-field input-primary-email"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <Input label="Secondary Email: "
                 name="email2"
                 aria-label="secondaryEmail"
                 className="input-field input-secondary-email"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <Input label="Mobile: "
                 name="mobile"
                 aria-label="mobilePhone"
                 className="input-field input-mobile-phone"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <Input label="Work Phone: "
                 name="work"
                 aria-label="workPhone"
                 className="input-field input-work-phone"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <Input label="Home Phone: "
                 name="home"
                 aria-label="homePhone"
                 className="input-field input-home-phone"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <Input label="facebook: "
                 name="facebook"
                 aria-label="facebookLink"
                 className="input-field input-facebook"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <Input label="LinkedIn: "
                 name="linkedIn"
                 aria-label="linkedInLink"
                 className="input-field input-linkedIn"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <Input label="Twitter: "
                 name="twitter"
                 aria-label="twitterLink"
                 className="input-field input-twitter"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <Input label="GitHub: "
                 name="github"
                 aria-label="githubLink"
                 className="input-field input-github"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <label className='label'>
            Notes:
            <textarea name="notes"
                      aria-label="notes-textbox"
                      type="text"
                      className="input-field input-notes"
                      onChange={this.updateContact.bind(this)}>
            </textarea>
          </label>

          <label className='label'>
            Follow Up:
            <input type='checkbox'
                   id='followUp-checkbox'
                   onChange={() => {
                     this.setState({ followUp: !this.state.followUp })
                   }}
                   />
          </label>

        <Link to='/Contacts' id='save-form-link'>
          <Button id='save-to-firebase-btn'
                  disabled={!this.state.firstName}
                  className='button'
                  text='Save'
                  aria-label="saveButton"
                  handleClick={()=> {this.storeContact(this.state)}}
                  />
        </Link>
      </section>

      </div>
    )
  }
}
