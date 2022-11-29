import React from "react";
import LandingCard from "./CardComp";
import {motion} from "framer-motion";

//animations
let easing = [0.6, -0.5, 0.01, 0.99];

const container = {
    show:{
        transition:{
            staggerChildren:0.2
        }
    }
};

const title = {
    hidden:{opacity:0, y:100},
    show:{
        opacity:1,
        y:0,
        transition:{
            ease:'easeInOut',
            duration: .75
        }
    }
};

const Features = () => {

    return (
        <motion.div variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:true}}>
            <motion.div className="features__title" variants={title}>
                <h1>App Features</h1>
                <h3>
                    IARA is a tool designed for specialists to better 
                    improve their future diagnostics
                </h3>
            </motion.div>

            <motion.div className="features__cards">
                <LandingCard 
                    title="Precisión Computarizada" 
                />

                <LandingCard 
                    title="Velocidad de Análisis" 
                />

                <LandingCard 
                    title="Múltiples Inteligencias" 
                />
            </motion.div>
        </motion.div >
    )
};

export default Features;