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
        // let keys = Object.keys(obj)
          return (
            <div id='contact-container' key={i}>
              <div
                id='contact-card'
                onClick={()=> {
                  this.setState({ contactProfile: obj })
                }}>
                <span id="firstLast">{obj['firstName']} {obj['lastName']}</span>
              </div>

              <input id="checkbox" readOnly='true' type="checkbox" checked={obj['followUp']} />
            </div>
          )
      })
      return display
    } else {
        let contact = this.state.contactProfile;
        let keys = Object.keys(contact)
        return (
          <ContactProfile contact={contact}
            user={this.props.user}
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
        <div id="all-contacts">{this.contactCard()}</div>
    )
  }
}
