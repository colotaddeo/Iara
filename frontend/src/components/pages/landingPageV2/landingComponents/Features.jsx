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
        <motion.div className="features" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:true}}>
            <motion.div className="features__title" variants={title}>
                <h1>App Features</h1>
                <h3>
                    IARA is a tool designed for specialists to better 
                    improve their future diagnostics
                </h3>
            </motion.div>

            <motion.div className="features__cards">
                <LandingCard 
                    title="Multiple AI Models"
                    content={"Our product was developed with four AI models in order to ensure a more accurate prediction. By analyzing the radiography through different steps and multiple AI models, our process determines a patient’s likelihood of having tuberculosis."} 
                />

                <LandingCard 
                    title="Faster Analisis"
                    content={"Nowadays, detecting tuberculosis is extremely difficult for the human eye, many times the presence of said pathogen is overlooked. IARA provides professionals the results in only a matter of seconds, focusing on speed and accuracy at the same time."} 
                />

                <LandingCard 
                    title="Organization System"
                    content={"Not only is IARA a helpful tool for detecting tuberculosis, but also for organizing professionals in their daily tasks. Through a carefully developed system, IARA helps with keeping a record of patients, their corresponding radiographies and follow-up analysis."} 
                />
            </motion.div>
        </motion.div >
    )
};

export default Features;