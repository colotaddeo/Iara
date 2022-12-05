import { motion } from "framer-motion";
import React from "react";

import circles from "../images/whatDoes_circles.svg";

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

const transition = {duration:1.4, ease:[0.6, 0.01, -0.05, 0.9]};

const firstName = {
  hidden:{
    y:-20,
  },
  show:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:1
    }
  }
};

const lastName = {
  hidden:{
    y:-20,
  },
  show:{
    y:0,
    transition:{
      delayChildren:0.4,
      staggerChildren:0.04,
      staggerDirection:-1
    }
  }
};

const letter = {
    hidden:{opacity:0, y:100},
    show:{
      opacity:1,
        y:0,
        transition:{
            ease:'linear',
            duration: .5
        }
    }
};

const WhatDoesIara = () => {
    
    return (
        <motion.div id="why" className="whatDo" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:true}}>
            <motion.div className="features__title" variants={title}>
                <h1>What does IARA do?</h1>
                <h3>
                    With the use of artificial intelligence, IARA detects common
                    syntoms of tuberculosis
                </h3>
            </motion.div>

            <motion.div className="whatDo__body">
                <motion.div className="whatDo__body_left">
                    <motion.h2 className="whatDo__body_left_title">
                        <motion.span variants={firstName}>
                            <motion.span variants={letter}>M</motion.span>
                            <motion.span variants={letter}>u</motion.span>
                            <motion.span variants={letter}>l</motion.span>
                            <motion.span variants={letter}>t</motion.span>
                            <motion.span variants={letter}>i</motion.span>
                            <motion.span variants={letter}>p</motion.span>
                            <motion.span variants={letter}>l</motion.span>
                            <motion.span variants={letter}>e</motion.span>
                        </motion.span>
                        <br />
                        <motion.span className="iara_cyan" variants={lastName}>
                            <motion.span variants={letter}>I</motion.span>
                            <motion.span variants={letter}>n</motion.span>
                            <motion.span variants={letter}>t</motion.span>
                            <motion.span variants={letter}>e</motion.span>
                            <motion.span variants={letter}>l</motion.span>
                            <motion.span variants={letter}>l</motion.span>
                            <motion.span variants={letter}>i</motion.span>
                            <motion.span variants={letter}>g</motion.span>
                            <motion.span variants={letter}>e</motion.span>
                            <motion.span variants={letter}>n</motion.span>
                            <motion.span variants={letter}>c</motion.span>
                            <motion.span variants={letter}>e</motion.span>
                            <motion.span variants={letter}>s</motion.span>
                        </motion.span>
                    </motion.h2>
                    <h3>
                        <span>
                            So as to determine a patients likelyhood of
                            having tuberculosis, the radiography walks
                            through a 
                        </span>
                        <span className="iara_cyan"> multi-ai </span>
                        <span>process </span>
                    </h3>   
                </motion.div>
                <div className="whatDo__body_right hide-for-mobile">
                    <img src={circles} alt="circle" />
                </div>
            </motion.div>
        </motion.div>
    )
};

export default WhatDoesIara;