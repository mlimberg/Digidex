import React, { Component } from 'react'
import firebase from 'firebase';
import Input from './Input';

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
      </div>
    )
  }
}
