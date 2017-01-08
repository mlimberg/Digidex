import React from 'react';

const Login = ({ authorize, setUser, text, id }) => {
  return (
    <div>
      <button className='button'
              id={id + '-btn'}
              onClick={()=> {
                authorize().then((fromFirebase) => setUser(fromFirebase));
              }}>
        {text}
      </button>
    </div>
  )
}

export default Login
