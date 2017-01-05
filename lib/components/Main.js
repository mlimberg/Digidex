import React, { Component } from 'react'
import firebase from 'firebase';
import Input from './Input';
import Button from './Button';
import NewContactForm from './NewContactForm';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      showNewForm: false,

    }
  }

  toggleNewContactForm() {
    this.setState({showNewForm: !this.state.showNewForm})
  }

  render() {
    return (
      <div>
        <h1>Digidex💻</h1>
        <Input/>
        <Button text="New" handleClick={this.toggleNewContactForm.bind(this)}/>
        {this.state.showNewForm ? <NewContactForm /> : <div></div> }
      </div>
    )
  }
}
