import React from 'react'
import {Link} from 'react-router-dom'

export const navBar = () => {
  return (
    <div>
        <h1>React MySQL</h1>
        
        <ul>
            <li>
                <Link to="/">Header</Link>
            </li>
            <li>
                <Link to="/Body">Body</Link>
            </li>
        </ul>
    </div>
  )
}

export default navBar