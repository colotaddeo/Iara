import React from "react";
import {motion} from "framer-motion";
import { useNavigate } from 'react-router-dom' 

//images
import logo_large from "../images/logos/logo-large.svg";
import logo_small from "../images/logos/logo-small.svg";

//animations
let easing = [0.6, -0.5, 0.01, 0.99];

const stagger = {
    animate:{
        transition:{
            delayChildren:0.4,
            staggerChildren:0.2,
            staggerDirection:1
        }
    }
};

const header={
    initial:{
        y:-60,
        opacity:0,
        transition:{duration:0.05, ease:easing}
    },
    animate:{
        y:0,
        opacity:1,
        animation:{
            duration:0.6,
            ease:easing
        }
    }
};

//Hide navbar
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-150px";
  }
  prevScrollpos = currentScrollPos;
}

const LandingNav = () => {

    const navigate = useNavigate()

    return(
        <motion.div initial='initial' animate='animate'>
            <motion.header id="navbar" className="landingNav" variants={stagger}>
                <motion.div variants={header}>
                    <img 
                        src={logo_small} 
                        width={65}
                        alt="logo" 
                        srcSet={`${logo_small} 1023w, ${logo_large} 1280w`}
                        sizes="(max-width: 1023px) 1023px, 1280px" 
                    />
                </motion.div>
                <div className="landingNav__right">
                    <ul className="landingNav__options">
                        <motion.li variants={header} className='landingNav__links'><a href="#home">Home</a></motion.li>
                        <motion.li variants={header} className='landingNav__links'><a href="#why">Why Iara?</a></motion.li>
                        <motion.li variants={header} className='landingNav__links'><a href="#team">About us</a></motion.li>
                        <motion.li variants={header} className='landingNav__links'><a href="#contact">Get in touch</a></motion.li>
                    </ul>
                    <motion.div className="hide-for-mobile" variants={header}>
                        <button className="land_clearBtn">Get Started</button>
                    </motion.div>

                    <div class="landingNav__hamburger">
                        <span class="landingNav__hamburger-line line1"></span>
                        <span class="landingNav__hamburger-line line2"></span>
                        <span class="landingNav__hamburger-line line3"></span>
                    </div>
                </div>
            </motion.header>
        </motion.div>
    );
};

export default LandingNav;