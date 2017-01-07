import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import firebase from 'firebase';
import Link from './Link';


const ContactProfile = ({ contacts }) => {
 //map through all the contacts
 //use all the keys from each object
 //See ContactList
  return (
    <div id='contact-profile-container'>
      <Link to='/'>
        <button className='button' id='close-form-btn'>X</button>
      </Link>

      HEYYYY!!!!!
    </div>
  )
}

export default ContactProfile
