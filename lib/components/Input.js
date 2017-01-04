import React from 'react';

const Input = ({value, type, placeholder, handleChange}) => {
  return (
    <input value={value} type={type} className="input-field" placeholder={placeholder} onChange={(e) =>{ handleChange(e) }}/>
  )
}

export default Input;
