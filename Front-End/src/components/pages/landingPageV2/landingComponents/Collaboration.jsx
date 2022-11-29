import React from "react";
import {motion} from "framer-motion";

//Images
import logo_tic from "../images/organizations/tic.svg"
import logo_ort from "../images/organizations/ort.svg"
import logo_umai from "../images/organizations/umai.svg"

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

const Collaboration = () => {

    return (
        <motion.div className="colab" variants={container} initial="hidden" exit="exit" whileInView="show" viewport={{once:true}}>
            <motion.div className="features__title" variants={title}>
                <h1>In collaboration with</h1>
                <h3>
                    These organizations helped develop IARA.
                    Without them, it wouldn't have been possible.
                </h3>
            </motion.div>

            <motion.div className="colab__logos">
                <motion.div variants={item}>
                    <img src={logo_tic} alt="TIC logo" />
                </motion.div>

               <motion.div variants={item}>
                    <img src={logo_ort} alt="ORT logo" />
               </motion.div>

               <motion.div variants={item}>
                    <img src={logo_umai}  alt="UMAI logo"/>
                </motion.div>
            </motion.div>

        </motion.div>
    )
};

export default Collaboration;