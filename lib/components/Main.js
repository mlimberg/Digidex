import React, { Component } from 'react'
import firebase from 'firebase';
import Input from './Input';
import Button from './Button';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <h1>Digidex💻</h1>
        <Input/>
        <Button text="New"/>
      </div>
    )
  }
}
