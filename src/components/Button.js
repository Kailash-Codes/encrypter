import React from 'react'

const Button = (props) => {
  return (
    <button className={props.buttonClass}>{props.buttonName}</button>
  )
}

export default Button;