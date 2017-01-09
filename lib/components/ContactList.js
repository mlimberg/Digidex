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
          <ContactProfile contact={contact}
                          handleClick={() => {
                            this.setState({ contactProfile: '' }, ()=> {
                              this.contactCard()
                            })
                          }}
                        />
        )
    }
  }

  render() {
    return (
        <div>{this.contactCard()}</div>
    )
  }
}
