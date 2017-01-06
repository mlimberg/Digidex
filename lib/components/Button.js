import React from 'react';

const Button = ({id, handleClick, text }) => {
  return (
    <button
      id={id}
      className='button'
      onClick={() => {handleClick()}}>
      {text}
    </button>
  )
}

export default Button;
