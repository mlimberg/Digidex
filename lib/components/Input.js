import React from 'react';

const Input = ({label, className, id, name, type, placeholder, handleChange}) => {
  return (
    <label>
      {label}
      <input
        className={className}
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={(e) => { handleChange(e) } }
      />
    </label>
  )
}

export default Input;
