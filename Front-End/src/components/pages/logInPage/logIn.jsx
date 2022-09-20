import React from 'react';
import {Link} from 'react-router-dom';
import Home from '../home/Home';
import {Formik} from 'formik';
import './logIn.css';
import Media from '../../../assets/video4.mp4'


const LogIn = () => {
  const datosLog = [
    {
      lbl: "Email",
      type:"email"
    },
    {
      lbl:"Contraseña",
      type:"password"
    }
  ]
  return (
    <div className='login-container'>
      <div className='form'>
        {datosLog.map(({ lbl, type }, index) => {
          return (
            <form key={index} className='login-form'>

              <input type={type} className="form-input" placeholder={lbl}/>
              <span className='bar'></span>

            </form>
          )
        })}
      </div>
      <div className='multimedia'>
        <video src={Media} loop autoPlay muted></video>
      </div>

      {/* <Link to= '/home' >Verificar, entrar</Link> */}
    </div>
  )
}

export default LogIn