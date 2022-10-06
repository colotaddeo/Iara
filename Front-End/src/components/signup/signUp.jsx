import React, {useState} from 'react'
import './signUp.css'
import Media from '../Media/Media.jsx'
import Imagen from '../.././assets/Doctora1.png'
import {Link} from 'react-router-dom';
import {Formik, useFormik, Form, Field} from 'formik';


const signUp = () => {

  const datosSign = [
    {
      lbl: "Nombre:",
      type: "text"
    },
    {
      lbl: "Apellido:",
      type: "text"
    },
    {
      lbl: "DNI:",
      type: "text",
    },
    {
      lbl: "E-mail:",
      type: "email"
    }
  ]
  const Numeros= (string) =>{//Solo numeros
    var out = '';
    var filtro = '1234567890';//Caracteres validos
	
    //Recorrer el texto y verificar si el caracter se encuentra en la lista de validos 
    for (var i=0; i<string.length; i++)
       if (filtro.indexOf(string.charAt(i)) != -1) 
        //Se añaden a la salida los caracteres validos
	     out += string.charAt(i);
	
    //Retornar valor filtrado
    return out;
  } 
  
  return (
    <div className="all-container">

      <div className='imagen'>

        <img src={Imagen} alt="IMagen ilustrativa" />

      </div>

      <div className="form">
        
        <h2>Crear cuenta</h2>

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
              id="nombre"
              name="nombre"
              type="text"
              placeholder="Ingresá tu nombre"
              className="input__signup"
            />
            <Field
              id="apellido"
              name="apellido"
              type="text"
              placeholder="Ingresa tu apellido"
              className="input__signup"
            />
            <Field
              id="apellido"
              name="apellido"
              type="text"
              placeholder="Ingresa tu apellido"
              className="input__signup"
            />
            <button className="button__login" type="submit">Submit</button>
          </Form>
        </Formik>

        <div className='dropdown-container'>

          <select name="Instituciones" id="">
            <option value="-1">Institución</option>
            <option value="Umai">Umai</option>
            <option value="Muñiz">Muñiz</option>
          </select>
        
        </div>
        <div className='button-container'>
        <Link to= '/home' className='login-button'>Ya tenes cuenta?</Link>
        <a href="" className='confirm'>Confirmar</a>
        </div>

      </div>
    </div>
  )
}

export default signUp