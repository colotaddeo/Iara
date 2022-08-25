import React from 'react'
import './Header.css'
import navButtons from '../navButtons/navButtons.jsx'
import Logo from '../../assets/logo.png'
import Background from '../../assets/background.png'

const datosNav = [
  {
    id: "#Inicio", text: "Inicio"
  },
  {
    id:"#Nosotros", text: "Nosotros"
  },
  {
    id:"#Nosotros", text: "Nosotros"
  }
]

const Header = () => {
  return (
    <header className="header-conteiner">
      <ul>
        <img src={Background} alt="Background" className="background"/>
        <img src= {Logo} alt="Logo" className="logo"/>
        {datosNav.map(({id, text})=> {
          return (
            <li className='nav-buttons'> <navButtons text={text} id={id}/> {text}</li>
          )
        })}
      </ul>
        

    </header>
  )
}

export default Header