import React, { Component } from 'react'
import firebase from 'firebase';
import { signIn, signOut, reference } from '../firebase';
import Input from './Input';
import Button from './Button';
import NewContactForm from './NewContactForm';
import Login from './Login';
import Link from './Link';
import ContactList from './ContactList';

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
    }
  }

  render() {
    return (
      // <div>
      //   {
      //   !this.state.user
      //   ?
      //   <Login className='signIn' text='Sign In' authorize={signIn} setUser={(user)=> {this.setState({ user: user })}} />
      //   :
        <div>
          <div className='header'>
            <Link to='/'>
              <h1>Digidex💻</h1>
            </Link>

            <Input />

            <Link to='/NewContact'>
              New
            </Link>

            <Link to='/ContactList'>
              List
            </Link>
            </div>

          <main>
            {this.props.children}
          </main>

          {/* <Login className='signOut' text='Sign Out' authorize={signOut} setUser={()=> {this.setState({ user: null })}} />
        </div>
        } */}

      </div>
    )
  }
}
