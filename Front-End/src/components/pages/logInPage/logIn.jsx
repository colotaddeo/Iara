import React from 'react';
import {Link} from 'react-router-dom';
import Home from '../home/Home';
import {Formik} from 'formik';
import './logIn.css'


const LogIn = () => {
  return (
    <div className='login-container'>
        <h1>ESTE ES EL LOGIN, Iniciar sesión</h1>

        <form>
          <label>Ingresa tu apelido</label>
          <br />
          <input type="text" placeholder="ingresa tu apellido"/>
          <br />
          <label>Ingresa tu dni</label>
          <br />
          <input type="number" min="1"placeholder="ingresa tu dni"/>
        </form>
      
        <Link to= '/home' >Verificar, entrar</Link>
    </div>
  )
}

export default LogIn