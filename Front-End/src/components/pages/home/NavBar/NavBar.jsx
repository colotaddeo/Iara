import React from 'react'
import Escritorio from './iconoEscritorio.png'
import Pacientes from '../../../../assets/iconoPacientes.png'

const NavBar = () => {
  const datosNav = [
    {
      nombre: 'Escritorio',
      icono: {Escritorio},
      ruta: '#escritorio'
    },
    {
      nombre: 'Pacientes',
      icono: {Pacientes},
      ruta: '#pacientes'
    }
  ]
  return (
    
    
    
    <div className='all-container'>
      {datosNav.map(({nombre, icono, ruta }) => {
          return (
            <div>
              <img src={icono} alt="" />
              <a href={ruta}>{nombre}</a> 
            </div>
          )
        })}
    </div>
  )
}

export default NavBar