import React from 'react'
import {Link} from 'react-router-dom'
import Home from '../home/Home'


const LogIn = () => {
  return (
    <div>
        <h1>ESTE ES EL LOGIN</h1>
        <Link to= '/home' >Verificar, entrar</Link>
    </div>
  )
}

export default LogIn