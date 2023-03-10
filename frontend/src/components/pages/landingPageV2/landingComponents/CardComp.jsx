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

const LandingCard = ({title, content}) => {

    return (
        <>
            <motion.div className="features__cards_card" variants={item}>
                <h1>{title}</h1>
                <h3>{content}</h3>
            </motion.div>
        </>
    )
};

export default LandingCard;