import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import firebase from 'firebase';
import Link from './Link';


const ContactProfile = ({ contacts }) => {
  let contact = contacts.map((obj, i) => {
    let keys = Object.keys(i);
    console.log(keys);
    return <div key={'firebaseId'}>
      {obj['firstName']} {obj['lastName']}
      {obj['company']}
      {obj['ema il1']}
      {obj['email2']}
      {obj['mobile']}
      {obj['work']}
      {obj['home']}
      {obj['facebook']}
      {obj['linkedIn']}
      {obj['twitter']}
      {obj['github']}
    </div>
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

export default ContactProfile
