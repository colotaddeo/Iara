import React from 'react'
import Header from '../landingPage/header/Header'
import Body from '../landingPage/body/Body'
import Model from '../landingPage/3dmodel/model'
import './scss/style.css'

//Framer Motion
import { motion } from "framer-motion";

//Images
import logoIara from './images/logoTxt.svg'
import landingImage from './images/landingImage.svg'
import herramienta_complementaria from './images/herramienta_complementaria.svg'
import instagram_logo from './images/instagram_logo.svg'
import man_with_rx from './images/man_with_rx.jpg'
import marie_curie from './images/marie_test_about.svg'
import precision_computarizada from './images/precision_computarizada.svg'
import velocidad_de_analisis from './images/velocidad_de_analisis.svg'
import de_uso_gratuito from './images/de_uso_gratuito.svg'
import por_que_iara_circle from './images/por_que_iara_circle.svg'
import logo_ort from './images/logo_ort.svg'
import logo_muniz from './images/logo_muniz.svg'
import logo_maimonides from './images/logo_maimonides.svg'
import { useNavigate } from 'react-router-dom' 

const HomePage = () => {

  const navigate = useNavigate()

  return (
    <div>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap" rel="stylesheet"></link>
      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap" rel="stylesheet"></link>
      
      <header id="navbar" class="header">
        <nav class="flex flex-jc-sb flex ai-c">

          <div class="header__links flex flex-ai-c wrapper">
            <a href="/">
              <img src={logoIara} alt="Iara"/>
            </a>

            <ul>
              <li className='nav_links'><a href="#hero">Inicio</a></li>
              <li className='nav_links'><a href="#por_que_iara_cards">¿Por qué IARA?</a></li>
              <li className='nav_links'><a href="#about_us">Acerca de nosotros</a></li>
              <li className='nav_links'><a href="#footer">Contacto</a></li>
            </ul>
          </div>

          <div class="nav__button">
            <button type="submit" class="cyanBtn">Ir a Mi Escritorio</button>
          </div>
        </nav>
      </header>
      <section id="hero"class="hero">
        <motion.div drag="z"  className="hero__image flex flex-jc-r">
            <img src={landingImage} alt="landingImage"/>
        </motion.div>

        <div class="hero__text flex flex-ai-l flex flex-jc-c">
            <h1>
                Un paso mas hacia el<br/>futuro con
                <span class="hero__IARAtxt"> IARA</span>
            </h1>
            <br></br>
            <motion.p whileHover={{scale: 1.1, x: 40}}>
              Mejora la precisión de tus diagnósticos de manera<br></br>totalmente  
              <span class="hero__gratuitatxt"> gratuita</span>
            </motion.p>
            <br></br>
            <div class="hero__buttons">
                <button  onClick={() => navigate('/login')} type="submit" class="transparantBtn" >Comienza ahora</button>
            </div>
        </div>
      </section>
      <section id="por_que_iara_cards"className="cards">
        <div className="cards__img">
          <img src={por_que_iara_circle} alt="por_que_iara_circle"/>
        </div>
        <div className="cards__items">
          <div className="cards__top_row">
            <div id = "card1" class="levitate">
              <img src={precision_computarizada} alt="precision_computarizada"></img><br></br>
              <h2>
                  Precisión<br></br>computarizada
              </h2><br></br>
              <p>
                Combinamos Inteligencia Artificial con Big<br></br>
                Data para optimizar el resultado
              </p>
            </div>

            <div id = "card2" class="levitate">
              <img src={velocidad_de_analisis} alt="velocidad_de_analisis"></img><br></br>
              <h2>
                 Velocidad de<br></br>análisis
              </h2><br></br>
              <p>
                Tu resultado en cuestión de segundos. Lo que<br></br>
                antes era un día, ahora es un minuto
              </p>
            </div>
          </div>
          <div className="cards__bottom_row">
            <div id = "card3" class="levitate">
              <img src= {de_uso_gratuito} alt="de_uso_gratuito"></img><br></br>
              <h2>  
                De uso gratuito
              </h2><br></br>
              <p>
                Nuestros servicios estan abiertos al personal<br></br>
                médico de manera libre y gratuita
              </p>
            </div>
            <div id = "card4" class="levitate">
              <img src= {herramienta_complementaria} alt="herramienta_complementaria"></img><br></br>
              <h2>
                Herramienta<br></br>complementaria
              </h2><br></br>
              <p>
                Ayuda para el especilista, no es un diagnóstico.<br></br>
                Por esta razón restringimos el servicio a<br></br>
                personal médico, evitando auto-evaluaciones
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id = "about_us" class="about">
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
      <section id="comenzar"className='comenzar_sec'>
        <img className="comenzar_sec__bg" src={man_with_rx} alt="man_with_rx"></img>
        <div className="comenzar_sec__content">
          <h2>¿Listo para comenzar?</h2><br></br>
          <button  onClick={() => navigate('/login')} type="submit" class="transparantBtn" >
            Comenzar
          </button>
        </div>
      </section>
      <footer id="footer" className='landing_footer'>
        <div className="landing_footer__logos">
          <ul>
            <li><img src={logo_maimonides} alt="logo_maimonides" /></li>
            <li><img src={logo_ort} alt="logo_ort" /></li>
            <li><img src={logo_muniz} alt="logo_muniz" /></li>
          </ul>
        </div>
      </footer>
    </div>
  )
}
export default HomePage