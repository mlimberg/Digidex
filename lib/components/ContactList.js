import React, { Component } from 'react';
import Link from './Link';


const ContactList = ({ contacts }) => {

  let contactName = contacts.map((obj, i) => {
    handleClick() {
      if(this.closest.obj === obj['firebaseId']) {
        console.log(obj);
      }
    }

    let keys = Object.keys(obj)
    return (
      <Link to='/ContactProfile' key={i}>
        <div key={i} id='contact-card' onClick={() => handleClick()}>
          {obj['firstName']} {obj['lastName']}
        </div>
      </Link>
    )
  })


  return (
    <div id='contact-list' aria-label={contactName}>
      <div>{contactName}</div>
    </div>
  )
}

export default ContactList
