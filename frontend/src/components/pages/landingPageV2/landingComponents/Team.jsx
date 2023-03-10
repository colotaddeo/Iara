import React from "react";
import TeamCardComp from "./TeamCardComp";
import TeamMembers from "./memberList";
import { motion } from "framer-motion";

const container = {
    show:{
        transition:{
            staggerChildren:0.2
        }
    }
};

const title = {
    hidden:{opacity:0, y:80},
    show:{
        opacity:1,
        y:0,
        transition:{
            ease:'easeInOut',
            duration: .5
        }
    }
};

const Team = () => {

    return (
        <motion.div className="team" id="team" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:true}}>
            <motion.div className="features__title" variants={title}>
                <h1>Meet our Amazing Team</h1>
                <h3>We are a group of 16-17 year old students currently studying at ORT Argentina</h3>
            </motion.div>
            <motion.div className="team__cards">
                {TeamMembers.map((e) =>{
                    return (
                        <TeamCardComp 
                            image={e.image}
                            name={e.name}
                            role={e.role}
                        />
                    );})}
            </motion.div>
        </motion.div>
    )
};

export default Team;