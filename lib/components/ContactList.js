import React, { Component } from 'react';
import Link from './Link';
import ContactProfile from './ContactProfile';

export default class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      contactProfile: '',
    }
  }

  contactCard() {
    let display;
    if(!this.state.contactProfile) {
      display = this.props.contacts.map((obj, i) => {
        let keys = Object.keys(obj)
          return (
              <div key={i}
                  id='contact-card'
                  onClick={()=> {
                    this.setState({ contactProfile: obj })
                  }}>
                {obj['firstName']} {obj['lastName']}
              </div>
          )
      })
      return display
    } else {
        let contact = this.state.contactProfile;
        let keys = Object.keys(contact)
        return (
          <div>

            <Link to='/'>
              <button className='button'
                      id='close-form-btn'
                      aria-label='close-form-button'
                      onClick={() => {
                        this.setState({ contactProfile: '' }, ()=> {this.contactCard()})
                      }}>X</button>
            </Link>

            <h6>{contact['firstName']}</h6>
            <h6>{contact['lastName']}</h6>
            <h6>{contact['company']}</h6>
            <h6>{contact['email1']}</h6>
            <h6>{contact['email2']}</h6>
            <h6>{contact['mobile']}</h6>
            <h6>{contact['home']}</h6>
            <h6>{contact['work']}</h6>

          </div>
        )
    }
  }


  render() {
    return (
        <div>{this.contactCard()}</div>
    )
  }
}
