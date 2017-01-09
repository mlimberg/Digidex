import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import firebase from 'firebase';
import Link from './Link';

//map through contacts array
//match to individual that was clicked on -> should this function go in ContactList?
//pull all keys for pertinent record
//render all keys on page

const ContactProfile = ({ contacts }) => {

  let contact = contacts.map((obj, id) => {
    const record = obj['firebaseId'];
    return record;
  }, 'firebaseId')

  return (
    <div id='contact-profile-container' aria-label="contactInfo">
      <Link to='/'>
        <button className='button' id='close-form-btn' aria-label="closeForm">X</button>
      </Link>

      <div id='contact-profile'>{contact}</div>

    </div>
  )
}



//
// <div key={'firebaseId'}>
//   {obj['firstName']} {obj['lastName']}
//   {obj['company']}
//   {obj['email1']}
//   {obj['email2']}
//   {obj['mobile']}
//   {obj['work']}
//   {obj['home']}
//   {obj['facebook']}
//   {obj['linkedIn']}
//   {obj['twitter']}
//   {obj['github']}
// </div>







export default ContactProfile
