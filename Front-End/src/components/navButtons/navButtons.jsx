import React from 'react'
import './navButtons.css'

const navButtons = ({text, route}) => {
  return (
    <div>
        <a href={route} className="nav-button">{text}</a>
    </div>
  )
}

export default navButtons