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
      contacts: [ { name: 'Mike' }, { name: 'Joe' }, { name: 'William'} ],
    }
  }

  componentDidMount() {

  }

  render() {
    var children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        contacts: this.state.contacts,
      })
    })


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
            <h1 id='main-header'>DigiDex</h1>
          </Link>

          <div id='header-input'>

            <Input id='filter-contact-input' className='input-field'/>

            <Link to='/NewContact'>
                <button id='new-contact-btn' className='button'>New</button>
            </Link>

          </div>

        </div>

        <main>
          {children}
        </main>

        {/* <Login className='signOut' text='Sign Out' authorize={signOut} setUser={()=> {this.setState({ user: null })}} />
      </div>
      } */}

      </div>
    )
  }
}
