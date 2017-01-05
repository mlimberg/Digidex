import React, { Component } from 'react';
import Input from './Input';

export default class NewContactForm extends Component {
  constructor() {
    super();
      this.state = {

      }
  }
  render() {
    return (
      <div>
        <Input className="input-field input-first-name"
               type="text"
               value=""
               onChange={(e) => this.updateFirst()} />

        <Input className="input-field input-last-name"
               type="text"
               value="" />

        <Input label="Company"
               className="input-field input-company"
               type="text"
               value="" />

        <Input label="Primary Email"
               className="input-field input-primary-email"
               type="text"
               value="" />

        <Input label="Secondary Email"
               className="input-field input-secondary-email"
               type="text"
               value="" />

        <Input label="Mobile"
               className="input-field input-mobile-phone"
               type="text"
               value="" />

        <Input label="Work Phone"
               className="input-field input-work-phone"
               type="text"
               value="" />

        <Input label="Home Phone"
               className="input-field input-home-phone"
               type="text"
               value="" />

        <Input label="facebook"
               className="input-field input-facebook"
               type="text"
               value="" />

        <Input label="LinkedIn"
               className="input-field input-linkedIn"
               type="text"
               value="" />

        <Input label="Twitter"
               className="input-field input-twitter"
               type="text"
               value="" />

        <Input label="GitHub"
               className="input-field input-github"
               type="text"
               value="" />
      </div>
    )
  }
}
