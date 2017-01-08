import React from 'react';
import Login from './Login';
import { signIn } from '../firebase'
import Link from './Link';

const SignInPage = ({ assign, setUser }) => {

  return (
    <div>
      <div id='header'>

        <Link to='/'>
          <h1 id='main-header'>DigiDex</h1>
        </Link>

      </div>

      <Login id='signIn'
             text='Sign In With Gmail'
             authorize={signIn}
             setUser={setUser} />
    </div>
  )
}

export default SignInPage
