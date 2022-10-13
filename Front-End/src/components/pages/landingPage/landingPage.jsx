import React from 'react'
import Header from '../landingPage/header/Header'
import Body from '../landingPage/body/Body'
import Model from '../landingPage/3dmodel/model'
import './scss/style.css'


//Images
import logoIara from './images/logoTxt.svg'
import landingImage from './images/landingImage.svg'
import herramienta_complementaria from './images/herramienta_complementaria.svg'
import instagram_logo from './images/instagram_logo.svg'
import man_with_rx from './images/man_with_rx.svg'
import marie_curie from './images/marie_test_about.svg'
import precision_computarizada from './images/precision_computarizada.svg'
import velocidad_de_analisis from './images/velocidad_de_analisis.svg'
import { useNavigate } from 'react-router-dom' 

const HomePage = () => {

  const navigate = useNavigate() 

  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"></link>
      
      <header class="header">
        <nav class="flex flex-jc-sb flex ai-c">

          <div class="header__links flex flex-ai-c wrapper">
            <a href="/">
              <img src={logoIara} alt="Iara"/>
            </a>

            <ul>
              <li><a href="#">Inicio</a></li>
              <li><a href="#about_id">Acerca de nosotros</a></li>
              <li><a href="#">Contacto</a></li>
            </ul>
          </div>

          <div class="nav__button">
            <button type="submit" class="cyanBtn">Ir a Mi Escritorio</button>
          </div>
        </nav>
      </header>
      <section class="hero">
        <div class="hero__image flex flex-jc-r">
            <img src={landingImage} alt="landingImage"/>
        </div>

        <div class="hero__text flex flex-ai-l flex flex-jc-c">
            <h1>
                Mejora tus diagnósticos<br/>utilizando
                <span class="hero__IARAtxt"> IARA</span>
            </h1>
            <br></br>
            <p>
              Mejora la precisión de tus diagnósticos de manera<br></br>totalmente  
              <span class="hero__gratuitatxt"> gratuita</span>
            </p>
            <br></br>
            <div class="hero__buttons">
                <button  onClick={() => navigate('/login')} type="submit" class="cyanBtn" >Comienza ahora</button>
                <button type="submit" class="transparantBtn">¿Por qué IARA?</button>
            </div>
        </div>
      </section>
      <section class="cards">
        <div id = "card1" class="levitate">
            <img src={velocidad_de_analisis} alt="velocidad_de_analisis"></img><br></br>
            <h2>
                Velocidad de<br></br>análisis
            </h2><br></br>
            <p>
                Resultados en cuestión de segundos
            </p>
        </div>

        <div id = "card2" class="levitate">
            <img src={precision_computarizada} alt="precision_computarizada"></img><br></br>
            <h2>
                Precisión<br></br>computarizada
            </h2><br></br>
            <p>
                Inteligencia Artificial y Big Data combinados
            </p>
        </div>

        <div id = "card3" class="levitate">
            <img src= {herramienta_complementaria} alt="herramienta_complementaria"></img><br></br>
            <h2>
                Herramienta<br></br>complementaria
            </h2><br></br>
            <p>
                Ayuda para el especilista, no es un diagnóstico.<br></br>
                Funciona, a su vez, como un sistema de registro<br></br>
                de pacientes en donde el especialista podrá<br></br>
                hacer un seguimiento para optimizar el<br></br>
                tratamiento
            </p>
        </div>
      </section>
      <img src={man_with_rx} alt="man_with_rx" class="full_image"></img>
      <section id = "about_id" class="about">
        <div class="about__team_card">
            <a>Conocé al<br></br>equipo de IARA</a>
        </div>
        <div class="about__image_cards about__top_row">
            <a href="https://www.instagram.com/facuvazquezz._/" target="_blank" class="about__single_card">
              <div class="about__member_photo">
                  <img src={marie_curie} alt="marie_test_about"></img>
              </div>
              <h4 class="about__name">Facundo Vazquez<br></br>
              <span class="about__nameTag">&#60;IA developer/&#62;</span></h4>
            </a>
            <a href="https://www.instagram.com/vpalonsky/" target="_blank" class="about__single_card">
              <div class="about__member_photo">
                <img src={marie_curie} alt="marie_test_about"></img>
              </div>
              <h4 class="about__name">Vincenzo Palonsky<br></br>
              <span class="about__nameTag">&#60;IA developer/&#62;</span></h4>
            </a>
            <a href="https://www.instagram.com/dwu0501/" target="_blank" class="about__single_card">
              <div class="about__member_photo">
                <img src={marie_curie} alt="marie_test_about"></img>
              </div>
              <h4 class="about__name">Daniel Wu<br></br>
              <span class="about__nameTag">&#60;IA developer/&#62;</span></h4>
            </a>
            <a href="https://www.instagram.com/gonbenzaquen/" target="_blank" class="about__single_card">
              <div class="about__member_photo">
                <img src={marie_curie} alt="marie_test_about"></img>
              </div>
              <h4 class="about__name">Gonzalo Benzaquen<br></br>
              <span class="about__nameTag">&#60;IA developer/&#62;</span></h4>
            </a>
            <a href="https://www.instagram.com/julikova_/" target="_blank" class="about__single_card">
              <div class="about__member_photo">
                <img src={marie_curie} alt="marie_test_about"></img>
              </div>
              <h4 class="about__name">Julieta Kovalivker<br></br>
              <span class="about__nameTag">&#60;IA developer/&#62;</span></h4>
            </a>
        </div>
        <div class="about__image_cards about__bottom_row">
            <a href="https://www.instagram.com/luisaugustoembon/" target="_blank" class="about__single_card">
              <div class="about__member_photo">
                <img src={marie_curie} alt="marie_test_about"></img>
              </div>
              <h4 class="about__name">Luis Embon<br></br>
              <span class="about__nameTag">&#60;Back-End developer/&#62;</span></h4>
            </a>
            <a href="https://www.instagram.com/nicotaddeo_/" target="_blank" class="about__single_card">
              <div class="about__member_photo">
                <img src={marie_curie} alt="marie_test_about"></img>
              </div>
              <h4 class="about__name">Nicolás Taddeo<br></br>
              <span class="about__nameTag">&#60;Front-End developer/&#62;</span></h4>
            </a>
            <a href="https://www.instagram.com/andres.chouela/" target="_blank" class="about__single_card">
              <div class="about__member_photo">
                <img src={marie_curie} alt="marie_test_about"></img>
              </div>
              <h4 class="about__name">Andrés Chouela<br></br>
              <span class="about__nameTag">&#60;Front-End developer/&#62;</span></h4>
            </a>
            <a href="https://www.instagram.com/caro.orbuch/" target="_blank" class="about__single_card">
              <div class="about__member_photo">
                <img src={marie_curie} alt="marie_test_about"></img>
              </div>
              <h4 class="about__name">Carola Orbuch<br></br>
              <span class="about__nameTag">&#60;UX/UI designer/&#62;</span></h4>
            </a>
        </div>
      </section>
    </div>

    
  )
}
export default HomePage