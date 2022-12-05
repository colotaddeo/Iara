import { motion } from "framer-motion";
import React from "react";
import teamBackground from "../images/team/teamBackground.svg"

const item = {
    hidden:{opacity:0,y:60},
    show:{
        opacity:1,
        y:0,
        transition:{
            ease:'easeInOut',
            duration: .3
        }
    }
}

const TeamCardComp = ({image, name, role}) =>{
    return (
        <motion.div className="team__card" variants={item}>
            <div className="team__card_img">
                <div className="team__card_img_top">
                    <img src={image} width={270} role="presentation" />
                </div>
                <div className="team__card_img_bot">
                    <img src={teamBackground} width={270} role="presentation" />
                </div>
            </div>
            <div className="team__card_text">
                <h3>{name}</h3>
                <h4>{role}</h4>
            </div>
        </motion.div>
    )
};

export default TeamCardComp;