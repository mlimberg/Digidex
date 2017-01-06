import React, { Component } from 'react';
import Link from './Link';


const ContactList = ({ contacts }) => {
  console.log(contacts)

  let contactName = contacts.map((obj, i) => {
    return <div key={i} id='contact-card'>{obj.name}</div>
  })

  return (
    <div>
      <div>{contactName}</div>
    </div>
  )
}

export default ContactList
