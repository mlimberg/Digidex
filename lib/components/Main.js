import React, { Component } from 'react'
import firebase from 'firebase';
import { signOut } from '../firebase';
import Input from './Input';
import Button from './Button';
import NewContactForm from './NewContactForm';
import Login from './Login';
import Link from './Link';
import ContactList from './ContactList';
import createArrayFromDB from './Helpers/createArrayFromDB';
import ContactProfile from './ContactProfile';
import SignInPage from './SignInPage'

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      user: null,
      contacts: [],
      filterText: '',
    }
  }

  setUserAndGetContacts(user) {
    let keys = Object.keys(user)
    let userId = user['user'].uid
    this.setState({ user: user }, ()=> {
      firebase.database().ref(userId).on('value', (snapshot) => {
        const itemsFromFirebase = createArrayFromDB(snapshot.val());
        this.setState({
          contacts: itemsFromFirebase ? itemsFromFirebase : []
        });
      })
    })
  }

  contactsFilter() {
    let filterArray = this.state.contacts.filter((obj) => {
      let keys = Object.keys(obj)
      if(obj[keys[0]].indexOf(this.state.filterText) >= 0 || obj[keys[1]].indexOf(this.state.filterText) >= 0) {
        return obj
      }
    })
    return filterArray
  }

  render() {
    var children = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, {
        contacts: this.contactsFilter(),
        user: this.state.user,
      })
    })

    return (
      <div id='application-container'>
        {
        !this.state.user
        ?
        <SignInPage setUser={this.setUserAndGetContacts.bind(this)}/>
        :
        <div>
          <div id='header'>

            <Link to='/'>
              <h1 id='main-header'>DigiDex</h1>
            </Link>

            <div id='header-input'>

              <Input id='filter-contact-input'
                     className='input-field'
                     handleChange={(e) => {this.setState({ filterText: e.target.value })}} />

              <Link to='/NewContact'>
                  <button id='new-contact-btn' className='button'>New</button>
              </Link>

            </div>

          </div>

          <main>
            {children}
          </main>

          <div id='sign-out-banner'>
            <p>Welcome, {this.state.user.user.displayName}</p>
            <Login id='signOut'
              text='Sign Out'
              authorize={signOut}
              setUser={()=> this.setState({ user: null })} />
          </div>
        </div>
        }

      </div>
    )
  }
}
