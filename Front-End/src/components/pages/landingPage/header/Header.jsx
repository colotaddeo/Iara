import React, {useEffect, useState} from 'react'
import './Header.css'
import Logo from '../../../../assets/logo.png'


const Header = () => {

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
  const [mobile, setMobile] = useState(false);
    useEffect(()=> {
    window.addEventListener("resize", ()=> {
      if(window.innerWidth > 880){
        if(mobile) setMobile(false)
      } else {
        if(!mobile) setMobile(true)
      }
    });
  }, [])
  return (
    <> 
    {!mobile ? 
      <header className="header-conteiner">
      
      <div className='logo-conteiner'>
        <img src={Logo} alt="logo" className='logo' />
      </div>
      
      <nav>
        {datosNav.map(({route, text})=> {
          return (
            
            <a href= {route} onClick={handleClick} className={["nav-link", animate].join(" ")}>{text}</a>
           )
          })}

        <div className="register-buttons">

        <a href="/login">Log in</a>
        <a href="/signup">Sign up</a>

        </div>

      </nav>
        
      </header>
    :   <header className="top-nav">
    <div>
      Logo Here
    </div>
    <input id="menu-toggle" type="checkbox" />
    <label className='menu-button-container' htmlFor="menu-toggle">
    <div className='menu-button'></div>
  </label>
    <ul className="menu">
      <li>One</li>
      <li>Two</li>
      <li>Three</li>
      <li>Four</li>
      <li>Five</li>
    </ul>
  </header>}
    </>
  )
}

export default Header