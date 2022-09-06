import React, {useState} from 'react'
import './Header.css'
import Logo from '../../../../assets/logo.png'


export const Header = () => {

  const datosNav = [

    {
      route: "#Inicio",
      text: "Inicio",
    },
    {
      route: "#¿Por qué IARA?",
      text: "¿Por qué IARA?",
    },
    {
      route: "#¿Quienes somos?",
      text: "¿Quienes somos?",
    },  
    {
      route: "#Contacto",
      text: "Contacto",
    },

  ]

  const [animate, setAnimate] = useState('')

  const handleClick = () => {
    setAnimate("animate")
  }
  return (
    <header className="header-conteiner">

      <div className='logo-conteiner'>
        <img src={Logo} alt="logo" className='logo' />
      </div>
      
      <nav>
        {datosNav.map(({route, text})=> {
          return (
            
           <a href={route} onClick={handleClick} className={["nav-link", animate].join(" ")}>{text}</a>
          )
        })}

        <div className="register-buttons">
        <a href="/login">Log in</a>
        <a href="/signup">Sign up</a>
        </div>

      </nav>
        
    </header>
  )
}

export default Header