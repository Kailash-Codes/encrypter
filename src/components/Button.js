import React from 'react'

const Button = (props) => {
  return (
    <button  onClick={props.onClick} className={props.buttonClass}>{props.buttonName}</button>
  )
}

export default Button;