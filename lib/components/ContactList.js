import React, { Component } from 'react';
import Link from './Link';

const ContactList = ({ contacts }) => {
  let contactName = contacts.map((obj, i) => {
    let keys = Object.keys(obj)
    return (
      <Link to='/ContactProfile' key={i}>
        <div key={i} id='contact-card'>
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
