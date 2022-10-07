import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import Home from '../home/Home';
import {Formik, Form, Field} from 'formik';
import './logIn.css';
import Media from '../../../assets/video4.mp4'
import axios from 'axios';
import Imagen from '../../../assets/Doctora1.png'
import Logo from '../../../assets/logo-login.png'



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


    fetch("http://localhost:4000/user/signin",{

      method: "POST",
      body: JSON.stringify(valoresIniciales),
      headers: {"Content-Type" : "application/json" }

    })

    .then(res => res.json())
    .catch(error => console.log("Error", error))
    .then(response => console.log(response))
  }


  return (
    <div className='login-container'>
      <div className='form-login'>  
        <h2 className="titulo__login">Iniciar sesion</h2>
        <Formik 

          initialValues={valoresIniciales}
          onSubmit={(valoresIniciales, formikHelpers) => {

            fetchinfo(valoresIniciales); 
            alert(JSON.stringify(valoresIniciales));
            console.log(valoresIniciales);
            formikHelpers.resetForm()

          }}
          

        >
          <Form>
            <div className='input__login'>
              <Field
                id="email"
                name="email"
                type="email"
              />
              <label>Email</label>
            </div>
            <div className='input__login'>
              <Field
                id="password"
                name="password"
                type="password"
              />
              <label>Contraseña</label>
              <a href="">¿Olvidadste tu Contraseña?</a>
            </div>
            <button className="button__login" type="submit">Submit</button>
            <div className='registrate__login'>
              <span>¿Aún no tienes cuenta? </span>
              <a href="">Registrate</a>
            </div>
          </Form>
        </Formik>
        <div className='logo__login'>
          <img src={Logo} />
          <label>IARA</label>
        </div>
      </div>
      <div className='imagen' id='imagen__login'>
        <img src={Imagen} alt="Imagen" />
      </div>
    </div>
  )
}

export default LogIn