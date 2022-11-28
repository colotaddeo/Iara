import React from "react";
import {motion} from "framer-motion";

const item = {
    hidden:{opacity:0,y:60},
    show:{
        opacity:1,
        y:0,
        transition:{
            ease:'easeInOut',
            duration: .5
        }
    }
};

const LandingCard = ({title}) => {

    return (
        <>
            <motion.div className="features__cards_card" variants={item}>
                <h1>{title}</h1>
                <h3>
                    Lorem ipsum dolor sit amet consectetur. 
                    Malesuada diam facilisi facilisis in nec sed sodales quis. 
                    Tincidunt mattis id aliquet molestie commodo justo 
                    consectetur parturient. Ipsum phasellus consectetur leo eget 
                    sed pretium mauris scelerisque. Sagittis viverra tristique 
                    vulputate purus eu integer massa. Pellentesque tempor cras iaculis iaculis 
                    mattis aenean facilisi velit. Vitae magna.
                </h3>
            </motion.div>
        </>
    )
};

export default LandingCard;