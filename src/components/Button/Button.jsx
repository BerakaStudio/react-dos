import React from 'react'
import './Button.css'

const Button = ({variante,text}) => {
  return (
    <button className={variante}>{text}</button>
  )
}

export default Button