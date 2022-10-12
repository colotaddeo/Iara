import React from 'react'
import Header from '../landingPage/header/Header'
import Body from '../landingPage/body/Body'
import Model from'../landingPage/3dmodel/model'

   const HomePage = () => {
  return (
    <div>
      <header class="header">
        <nav class="flex flex-jc-sb flex ai-c">
            
            <div class="header__links flex flex-ai-c wrapper">
                <a href="/">
                    <img src="images/logoTxt.svg" alt="Iara"></img>
                </a>
                
                <ul>
                    <li><a href="#">Inicio</a></li>
                    <li><a href="#about_id">Acerca de nosotros</a></li>
                    <li><a href="#">Contacto</a></li>
                </ul>        
            </div>

            <div class ="nav__button">
                <button type="submit" class="cyanBtn">Ir a Mi Escritorio</button>
            </div>
        </nav>
      </header>
    </div>
  )
}
export default HomePage