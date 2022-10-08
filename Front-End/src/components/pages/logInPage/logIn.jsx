import React, {useState, useEffect, useRef} from 'react';
import {Link} from 'react-router-dom';
import Home from '../home/Home';
import {Formik, Form, Field} from 'formik';
import './logIn.css';
import axios from 'axios';
import Imagen from '../../../assets/Doctora1.png'
import Logo from '../../../assets/logo-login.png'
import { TextField, Button} from "@mui/material";
import * as Yup from 'yup'



const LogIn = () => {

  const valoresIniciales = {
    email: '',
    password:''
  }
  const validationSchema = Yup.object({

    email: Yup.string()
      .required('Campo obligatorio')
      .email('Email inválido'),

    contraseña: Yup.string()
      .required('Campo obligatorio')
  })

  /*const fetchinfo = (valoresIniciales) => {


    fetch("http://localhost:4000/user/signin",{

      method: "POST",
      body: JSON.stringify(valoresIniciales),
      headers: {"Content-Type" : "application/json" }

    })

    .then(res => res.json())
    .catch(error => console.log("Error", error))
    .then(response => console.log(response))
  }
  */

  const useAxios = async (valoresIniciales) => {
    console.log(valoresIniciales)
    const response = await axios.post("http://localhost:4000/user/signin", JSON.stringify(valoresIniciales),{
      headers: {'Content-Type' : 'application/json' },
      withCredentials: true
    })
    console.log(response)
  }

  return (
    <div className='login-container'>
      <div className='form-login'>  
        <h2 className="titulo__login">Inicio de sesión</h2>
        <Formik 

          initialValues={valoresIniciales}
          onSubmit={(valoresIniciales, formikHelpers) => {

            useAxios(valoresIniciales)
            console.log(valoresIniciales);
            formikHelpers.resetForm()

          }}
          
        >

          {({ errors, isValid, touched, dirty }) => (
            <Form>
              
              <Field

                sx={{
                  minWidth: 0.92,
                  my: 2
                }}

                id="email"
                name="email"
                type="email"
                className="input__signup"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Email"

                error={Boolean(errors.email) && Boolean(touched.email)}
                helperText={Boolean(touched.email) && errors.email}
                />

                <Field

                sx={{
                  minWidth: 0.92,
                  my:2
                }}

                id="contraseña"
                name="contraseña"
                type="password"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Contraseña"
                size="normal"
                error={Boolean(errors.contraseña) && Boolean(touched.contraseña)}
                helperText={Boolean(touched.contraseña) && errors.contraseña}
                className="input__signup"

                />
            </Form>
          )}
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