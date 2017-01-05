import React from 'react';

const Input = ({label, className, id, type, value, placeholder, handleChange}) => {
  return (
    <label>
      {label}
      <input
        className={className}
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => { handleChange(e) } }
      />
    </label>
  )
}

export default Input;
