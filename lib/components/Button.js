import React from 'react';

const Button = ({id, handleClick, text, disabled }) => {
  return (
    <button
      id={id}
      className='button'
      disabled={disabled}
      onClick={() => {handleClick()}}>
      {text}
    </button>
  )
}

export default Button;
