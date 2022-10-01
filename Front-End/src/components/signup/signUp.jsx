import React from 'react'
import './signUp.css'
import Media from '../Media/Media.jsx'
import Imagen from '../.././assets/Doctora1.png'
import {Link} from 'react-router-dom';


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
      type: "number"
    },
    {
      lbl: "E-mail:",
      type: "email"
    }
  ]
  
  return (
    <div className="all-container">
      <div className='imagen'>
        {/* <Media /> */}

        <img src={Imagen} alt="IMagen ilustrativa" />

      </div>
      <div className="title">
        <h1>Un paso a la vez...  <br/> Comencemos.</h1>
        <p>Crea una cuenta para comenzar tu recorrido. Descubre las <br/> funcionalidades de Iara.</p>
      </div>
      <div className="form">
        
        <h2>Crear cuenta</h2>

        {datosSign.map(({ lbl, type }, index) => {
          return (
            <form key={index} className='login-form'>

              <input type={type} className="form-input" placeholder={lbl}/>
              <span className='bar'></span>

            </form>
          )
        })}

        <div className='dropdown-container'>

          <select name="Instituciones" id="">
            <option value="-1">Institución</option>
            <option value="Umai">Umai</option>
            <option value="Muñiz">Muñiz</option>
          </select>
          {/* <span>Institución</span>

          <ul>
            <li>Muñiz</li>
            <li>Umai</li>
          </ul> */}
        
        </div>
        <div className='button-container'>
        <Link to= '/home' className='login-button'>Ya tenes cuneta?</Link>
        <a href="" className='confirm'>Confirmar</a>
        </div>


      </div>
    </div>
  )
}

export default signUp