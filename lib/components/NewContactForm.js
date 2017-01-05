import React, { Component } from 'react';
import Input from './Input';

export default class NewContactForm extends Component {
  constructor() {
    super();
      this.state = {
        firstame: "",
        lastName: "",

      }
  }

  updateContact(e) {
    const { name, value } = e.target;
    // console.log(e.target.value);
    this.setState({ [name]: value });
  }

  render() {
    return (
      <div>
        <section className="contact-form">
          <Input className="input-field input-first-name"
                 name="firstName"
                 type="text"
                 value={this.state.firstName}
                 handleChange={this.updateContact} />

          <Input className="input-field input-last-name"
                 name="lastName"
                 type="text"
                 value={this.state.lastName}
                 handleChange={this.updateContact}/>

          <Input label="Company: "
                 name="company"
                 className="input-field input-company"
                 type="text"
                 value="" />

          <Input label="Primary Email: "
                 name="email1"
                 className="input-field input-primary-email"
                 type="text"
                 value="" />

          <Input label="Secondary Email: "
                 name="email2"
                 className="input-field input-secondary-email"
                 type="text"
                 value="" />

          <Input label="Mobile: "
                 name="mobile"
                 className="input-field input-mobile-phone"
                 type="text"
                 value="" />

          <Input label="Work Phone: "
                 name="work"
                 className="input-field input-work-phone"
                 type="text"
                 value="" />

          <Input label="Home Phone: "
                 name="home"
                 className="input-field input-home-phone"
                 type="text"
                 value="" />

          <Input label="facebook: "
                 name="facebook"
                 className="input-field input-facebook"
                 type="text"
                 value="" />

          <Input label="LinkedIn: "
                 name="linkedIn"
                 className="input-field input-linkedIn"
                 type="text"
                 value="" />

          <Input label="Twitter: "
                 name="twitter"
                 className="input-field input-twitter"
                 type="text"
                 value="" />

          <Input label="GitHub: "
                 name="github"
                 className="input-field input-github"
                 type="text"
                 value="" />
        </section>
      </div>
    )
  }
}
