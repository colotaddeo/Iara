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
      fetch(values);
    },
  });

  const fetch = (JSON) => {
    fetch({URI},{
      method: "POST",
      body: JSON.stringify(JSON),
      headers: {"Content-Type" : "application/json" }
    })

    .then(res => res.json())
    .catch(error => console.log("Error", error))
    .then(response => console.log("Éxito", response))
  }




  return (
    <div className='login-container'>
      <div className='form'>
        <h2 className="titulo__login">Iniciar sesion</h2>
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
              placeholder="Enter your Email"
              onChange={formik.handleChange}
              value={formik.values.email}
              className="input__login"
            />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className="input__login"
            />
            <button className="button__login" type="submit">Submit</button>
          </form>
        </Formik>

      </div>
      <div className='imagen' id='imagen__login'>
        <img src={Imagen} alt="Imagen" />
      </div>

    </div>
  )
}

export default LogIn