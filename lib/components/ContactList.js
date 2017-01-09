import React, { Component } from 'react';
import Link from './Link';
import ContactProfile from './ContactProfile';

export default class ContactList extends Component {
  constructor() {
    super();
    this.state = {
      contactProfile: null,
    }
  }

  contactCard() {
    let contactName = this.props.contacts.map((obj, i) => {
      let keys = Object.keys(obj)
      return (
        <Link to='/ContactProfile' key={i}>
          <div key={i}
               id='contact-card'
               onClick={()=> {
                 this.setState({ contactProfile: obj })
               }}>
            {obj['firstName']} {obj['lastName']}
          </div>
      </Link>
    )
  })
  return contactName
  }

  render() {
    return(<div>hey</div>)
    // return (
    //   <div id='contact-list'>
    //     {this.state.contactProfile
    //       ?
    //       <ContactProfile contact={this.state.contactProfile}/>
    //       :
    //     <div>{this.contactCard()}</div>
    //   }
    //   </div>
    // )
  }
}
