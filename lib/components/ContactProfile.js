import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import firebase from 'firebase';
import Link from './Link';


const ContactProfile = ({ contacts }) => {
  let contact = contacts.map((obj, i) => {
    let keys = Object.keys(obj);
    return <div key={i}>
      {obj['firstName']} {obj['lastName']}
      {obj['company']}
      {obj['email1']}
      {obj['email2']}
      {obj['mobile']}
      {obj['work']}
      {obj['home']}
      {obj['facebook']}
      {obj['linkedIn']}
      {obj['twitter']}
      {obj['github']}
    </div>
  })
 //map through all the contacts
 //use all the keys from each object
 //See ContactList
  return (
    <div id='contact-profile-container'>
      <Link to='/'>
        <button className='button' id='close-form-btn'>X</button>
      </Link>

      <div id='contact-card'>{contact}</div>

    </div>
  )
}

export default ContactProfile
