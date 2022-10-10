import React, {useState} from 'react'
import './signUp.css'
import Imagen from '../.././assets/Doctora1.png'
import {Link} from 'react-router-dom';
import {Formik, Form, Field} from 'formik';
import { TextField, Button} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { styled } from '@mui/system';
import * as Yup from 'yup'
import axios from 'axios';



const signUp = () => {
  
  const valoresIniciales = {
    nombre: '',
    apellido:'',
    email: '',
    contraseña: '',
    confirmarContraseña: '',
    hospital: '-1',
  }

  const validationSchema =  Yup.object({

    nombre: Yup.string()
      .required('Campo obligatorio')
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),

    apellido: Yup.string()
      .required('Campo obligatorio')
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),

    email: Yup.string()
      .required('Campo obligatorio')
      .email('Email inválido'),

    contraseña: Yup.string()
      .required('Campo obligatorio')
      .min(2, 'Too Short!')
      .max(50, 'Too Long!'),

    confirmarContraseña: Yup.string()
      .required('Campo obligatorio')
      .oneOf([Yup.ref("contraseña")], "Las contraseñas no coinciden"),

    hospital: Yup.string()
      .required('Campo obligatorio'),

    matricula: Yup.string()
      .required('Campo obligatorio')
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
  })

  const fetchAxios = (valoresIniciales) => {


    axios.post("http://localhost:4000/user/signin",{

      body: JSON.stringify(valoresIniciales),
      headers: {"Content-Type" : "application/json" }

    })

    .catch(error => console.log("Error", error))
    .then(response => console.log(response))
  }

  const handleChange = (prop) => (event) => {
    setValues({ ...valoresIniciales, [prop]: event.target.valoresIniciales });
  };

  // const handleClickShowPassword = () => {
  //   setValues({
  //     ...valoresIniciales,
  //     showPassword: !valoresIniciales.showPassword,
  //   });
  // };

  // const handleMouseDownPassword = (event) => {
  //   event.preventDefault();
  // };

  const [hospital, sethospital] = React.useState('');

  const handleChangehospital = (event) => {
    sethospital(event.target.value);
  };


  return (
    <div className="all-container">

      <div className='imagen'>

        <img src={Imagen} alt="IMagen ilustrativa" />

      </div>

      <div className="form">
        
        <h2>Registro</h2>

        <Formik 

          initialValues={valoresIniciales}
          validationSchema={validationSchema}
          onSubmit={(valoresIniciales) => {

            fetchAxios(valoresIniciales); 
            alert(JSON.stringify(valoresIniciales));
            console.log(valoresIniciales.json);
            formikHelpers.resetForm();

          }}

        >
          {({ errors, isValid, touched, dirty }) => (

          <Form>
            
            <Field
              
              sx={{
                mb:2,
              }}

              id="nombre"
              name="nombre"
              type="text"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Nombre"
              error={Boolean(errors.nombre) && Boolean(touched.nombre)}
              helperText={Boolean(touched.nombre) && errors.nombre}
              className="input__signup"
              
            />

            <Field
              
              sx={{
                mx:2
              }}

              id="apellido"
              name="apellido"
              type="text"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Apellido"
              size="normal"
              error={Boolean(errors.apellido) && Boolean(touched.apellido)}
              helperText={Boolean(touched.apellido) && errors.apellido}
              className="input__signup"
            />

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

            
            {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
              <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                type={valoresIniciales.showPassword ? 'text' : 'password'}
                value={valoresIniciales .password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {valoresIniciales.showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl> */}

            <Field

              sx={{
                minWidth: 0.92,
                my: 2
              }}

              id="confirmarContraseña"
              name="confirmarContraseña"
              type="password"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Confirmar contraseña"
              error={Boolean(errors.confirmarContraseña) && Boolean(touched.confirmarContraseña)}
              helperText={Boolean(touched.confirmarContraseña) && errors.confirmarContraseña}
              className="input__signup"
              
            />

            <FormControl 
            
              sx={{ 
                my: 2, 
                minWidth: 0.45
              }}>
              <InputLabel id="hospital">Hospital Asociado</InputLabel>
              <Select
                id="hospital"
                value= {hospital}
                label="Hospital Asociado"
                autoWidth
                onChange={handleChangehospital}
                error={Boolean(errors.email) && Boolean(touched.email)}
                helperText={Boolean(touched.email) && errors.email}
              >
                <MenuItem value="muñiz">Muñiz</MenuItem>
                <MenuItem value="umai">umai</MenuItem>
                <MenuItem value="{30}">Thirty</MenuItem>
              </Select>
            </FormControl>

            <Field

              sx={{
                mx:2,
                my:2
              }}

              id="matricula"
              name="matricula"
              type="text"
              as={TextField}
              variant="outlined"
              color="primary"
              label="Matrícula"
              error={Boolean(errors.contraseña) && Boolean(touched.contraseña)}
              helperText={Boolean(touched.contraseña) && errors.contraseña}
              className="input__signup"

            />

            <Button
              sx={{
                display: 'block',
                minWidth:0.92
              }}
              variant="contained"
              type="submit"
              size="large"
              disabled={!dirty || !isValid}
            >
              Continuar
            </Button>
            
          </Form>
          )}

        </Formik>

        <div className='button-container'>
        <Link to= '/login' className='login-button'>¿Ya tenes cuenta? <span>Ingresá</span></Link>
        <Link to="/Home">Volve a la home logueada pibe (es para testear si funcan los token lo pueden borrar de chill)</Link>
        </div>

      </div>
    </div>
  )
}

export default signUp