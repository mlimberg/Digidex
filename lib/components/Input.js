import React from 'react';

const Input = ({label, className, id, name, type, placeholder, handleChange, value}) => {
  return (
    <label className="label">
      {label}
      <input
        className={className}
        id={id}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={(e) => { handleChange(e) } }
      />
    </label>
  )
}

export default Input;
