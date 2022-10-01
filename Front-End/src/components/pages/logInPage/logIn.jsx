import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import Home from '../home/Home';
import {Formik, useFormik} from 'formik';
import './logIn.css';
import Media from '../../../assets/video4.mp4'
import axios from 'axios';
import Imagen from '../../../assets/Doctora1.png'

const URI = "https://localhost:4000/signin"

const LogIn = () => {

  const formik = useFormik({
    initialValues: {
      email: '',
      password:''
    },
    onSubmit: values => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  // var emailRef = emailRef(null)
  // var passwordRef = passwordRef(null)




  return (
    <div className='login-container'>
      <div className='form'>

        <Formik
          initialValues={{
            email:'',
            password:'',
          }}
        >
          <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            <button type="submit">Submit</button>
          </form>
        </Formik>

      </div>
      <div className='imagen'>
        <img src={Imagen} alt="Imagen" />
      </div>

    </div>
  )
}

export default LogIn