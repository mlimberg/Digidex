import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';
import firebase from 'firebase';
import Link from './Link';

const ContactProfile = ({ contact, handleClick }) => {

  return (
    <div>

      <Link to='/'>
        <button className='button'
                id='close-form-btn'
                aria-label='close-form-button'
                onClick={handleClick}>X</button>
      </Link>

      <h6>{contact['firstName']}</h6>
      <h6>{contact['lastName']}</h6>
      <h6>{contact['company']}</h6>
      <h6>{contact['email1']}</h6>
      <h6>{contact['email2']}</h6>
      <h6>{contact['mobile']}</h6>
      <h6>{contact['home']}</h6>
      <h6>{contact['work']}</h6>

    </div>
  )
}

export default ContactProfile
