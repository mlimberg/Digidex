import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import firebase from 'firebase';
import Link from './Link';


const ContactProfile = ({ contacts }) => {
  let contact = contacts.map((obj, id) => {
    const record = obj['firebaseId'];
    console.log(obj['firebaseId']);
    // record['firebaseId'] = id;
    return record;
  }, 'firebaseId')

  return (
    <div id='contact-profile-container'>
      <Link to='/'>
        <button className='button' id='close-form-btn'>X</button>
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
