import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import Home from '../home/Home';
import {Formik, useFormik, Form, Field} from 'formik';
import './logIn.css';
import Media from '../../../assets/video4.mp4'
import axios from 'axios';
import Imagen from '../../../assets/Doctora1.png'



const LogIn = () => {

  const valoresIniciales = {
    email: '',
    password:''
  }

  // const formik = useFormik({
  //   initialValues: {
  //     email: '',
  //     password:''
  //   },
  //   onSubmit: values => {
  //     alert(JSON.stringify(values, null, 2));
  //     fetchinfo(values);
  //   },
  // });

  const fetchinfo = (valoresIniciales) => {


    fetch("http://localhost:4000/signin",{

      method: "POST",
      body: JSON.stringify(valoresIniciales),
      headers: {"Content-Type" : "application/json" }

    })

    .then(res => res.json())
    .then(res => console.log(res))
    .catch(error => console.log("Error", error))
  }


  return (
    <div className='login-container'>
      <div className='form-login'>  
      <h2 className="titulo__login">Iniciar sesion</h2>
        <Formik 

          initialValues={valoresIniciales}
          onSubmit={(valoresIniciales) => {

            fetchinfo(valoresIniciales); 
            alert(JSON.stringify(valoresIniciales));
            console.log(valoresIniciales);

          }}

        >
          <Form>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Enter your Email"
              className="input__login"
            />
            <Field
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="input__login"
            />
            <button className="button__login" type="submit">Submit</button>
          </Form>
        </Formik>

      </div>
      <div className='imagen' id='imagen__login'>
        <img src={Imagen} alt="Imagen" />
      </div>

    </div>
  )
}

export default LogIn