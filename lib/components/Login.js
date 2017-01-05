import React from 'react';

const Login = ({ authorize, setUser, text, className }) => {
  return (
    <div className={className + 'Banner'}>
      <button className={className + 'Button'}
              onClick={()=> {
                authorize().then((fromFirebase) => setUser(fromFirebase));
              }}>
        {text}
      </button>
    </div>
  )
}

export default Login
