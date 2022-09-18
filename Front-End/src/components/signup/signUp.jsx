import React from 'react'
import Media from '../../assets/video2.mp4'
import './signUp.css'


const signUp = () => {

  const datosLog = [
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
      <div className="multimedia">
        <video src={Media} loop autoPlay muted></video>

      </div>
      <div className="form">
        
        <h2>Crear cuenta</h2>

        {datosLog.map(({ lbl, type }, index) => {
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

      </div>
    </div>
  )
}

export default signUp