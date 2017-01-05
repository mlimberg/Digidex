import React, { Component } from 'react'
import firebase from 'firebase';
import { signIn, signOut, reference } from '../firebase';
import Input from './Input';
import Button from './Button';
import NewContactForm from './NewContactForm';
import Login from './Login';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      showNewForm: false,
      user: null,
    }
  }

  toggleNewContactForm() {
    this.setState({showNewForm: !this.state.showNewForm})
  }

  render() {
    return (
      <div>
        {
        !this.state.user
        ?
        <Login className='signIn' text='Sign In' authorize={signIn} setUser={(user)=> {this.setState({ user: user })}} />
        :
        <div>
          <h1>Digidex💻</h1>

          <Input />

          <Button text="New" handleClick={this.toggleNewContactForm.bind(this)}/>

          {this.state.showNewForm ? <NewContactForm /> : <div></div>}

          <Login className='signOut' text='Sign Out' authorize={signOut} setUser={()=> {this.setState({ user: null })}} />
        </div>
        }
      </div>
    )
  }
}
