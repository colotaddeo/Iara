import React from 'react'
import Media from '../../assets/video.mp4'
import './signUp.css'


const signUp = () => {

  const datosLog = [
    {
      lbl: "Nombre",
      type: "text"
    },
    {
      lbl: "Apellido",
      type: "text"
    },
    {
      lbl: "DNI",
      type: "number"
    },
    {
      lbl: "E-mail",
      type: "email"
    }
  ]
  
  return (
    <div className="all-container">
      <div className="multimedia">
        <video src={Media} loop></video>
      </div>
      <div className="form">
        <h1>Crear cuenta</h1>

        {datosLog.map(({ lbl, type }) => {
          return (
            <form onSubmit={}>
              <label htmlFor="nombre">{lbl}</label>
              <input type={type} />
            </form>
          )
        })}

      </div>
    </div>
  )
}

export default signUp