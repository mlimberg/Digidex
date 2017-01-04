import React from 'react';

const Input = ({className, id, type, value, placeholder, handleChange}) => {
  return (
    <input
      className={className}
      id={id}
      type={type}
      value={value}
      placeholder={placeholder}
      // onChange={(e) => { handleChange(e) }}
    />
  )
}

export default Input;
