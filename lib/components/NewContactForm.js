import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import firebase from 'firebase';
import Link from './Link';


export default class NewContactForm extends Component {
  constructor() {
    super();
      this.state = {
        firstName: null,
        lastName: null,
      }
  }

  updateContact(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  storeContact(contact) {
    if(contact.firstName) {
      firebase.database().ref('contact').push(contact)
    }
  }

  render() {
    return (
      <div>
        <section id='contact-form'>
          <Link to='/'>
            <button className='button' id='close-form-btn'>X</button>
          </Link>

          <Input className="input-field input-first-name"
                 name="firstName"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <Input className="input-field input-last-name"
                 name="lastName"
                 type="text"
                 handleChange={this.updateContact.bind(this)}/>

          <Input label="Company: "
                 name="company"
                 className="input-field input-company"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <Input label="Primary Email: "
                 name="email1"
                 className="input-field input-primary-email"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <Input label="Secondary Email: "
                 name="email2"
                 className="input-field input-secondary-email"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <Input label="Mobile: "
                 name="mobile"
                 className="input-field input-mobile-phone"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <Input label="Work Phone: "
                 name="work"
                 className="input-field input-work-phone"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <Input label="Home Phone: "
                 name="home"
                 className="input-field input-home-phone"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <Input label="facebook: "
                 name="facebook"
                 className="input-field input-facebook"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <Input label="LinkedIn: "
                 name="linkedIn"
                 className="input-field input-linkedIn"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <Input label="Twitter: "
                 name="twitter"
                 className="input-field input-twitter"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

          <Input label="GitHub: "
                 name="github"
                 className="input-field input-github"
                 type="text"
                 handleChange={this.updateContact.bind(this)} />

        <Link to='/Contacts'>
          <Button id='save-to-firebase-btn'
                  className='button'
                  text='Save'
                  handleClick={()=> {this.storeContact(this.state)}}
                  />
        </Link>
      </section>

      </div>
    )
  }
}
