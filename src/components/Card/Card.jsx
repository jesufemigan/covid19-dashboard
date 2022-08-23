import React from 'react'
import './Card.css'

import { numberWithCommas } from '../../utils/'

const Card = ({ name, number, bgColor, textColor, icon }) => {
  
  return (
    <div style={{backgroundColor: bgColor, color: textColor}} className="card">
      <p>{name}</p>
      <span>
        {icon}
        <h1>{numberWithCommas(number)}</h1>
      </span>
    </div>
  )
}
export default Card