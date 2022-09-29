import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import Home from '../home/Home';
import {Formik} from 'formik';
import './logIn.css';
import Media from '../../../assets/video4.mp4'
import axios from 'axios';

const URI = "https://localhost:4000/tasks"

const LogIn = () => {
  const datosLog = [
    {
      lbl: "Email",
      type:"email",
      ref: "emailRef"
    },
    {
      lbl:"Contraseña",
      type:"password",
      ref: "passwordRef"
    }
  ]
  const emailRef = useRef(null)
  const passwordRef = passwordRef(null)


  const sendData = async () => {
    const data = await axios.post(URI, {
      email: ref.current.value,
      password: ref.current.value
    })
  }

  return (
    <div className='login-container'>
      <div className='form'>
        {datosLog.map(({ lbl, type }, index) => {
          return (
            <form onSubmit={sendData} key={index} className='login-form'>

              <input ref={ref} type={type} className="form-input" placeholder={lbl} />
              <span className='bar'></span>
              <button type="submit"></button>
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