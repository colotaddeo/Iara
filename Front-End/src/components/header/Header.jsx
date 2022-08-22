import React from 'react'
import './Header.css'
import Logo from '../../assets/imagen.png'

const Header = () => {
  return (
    <header classname="header-conteiner">
        <img src= {Logo} alt="Logo" classname="logo"/>
    </header>
  )
}

export default Header