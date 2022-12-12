import React from "react";
import Spline from '@splinetool/react-spline';
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom' 

const MainBody = () => {

    const navigate = useNavigate();

    return (
        <>
            <div id="home" className="landBody">
                <div className="landBody__left">
                    <h1 className="landBody__title">
                        <span>Enter a new technological </span> <br />
                        <span>era with </span> <span className="landBody__title_cyan">IARA</span>
                    </h1>
                    <h3 className="landBody__subtitle">
                        Improve diagnostics&nbsp;
                        <div className="landBody__carrousel">
                            <span className="landBody__carrousel_line"> completely free of charge</span>
                            <span className="landBody__carrousel_line"> with just a click</span>
                            <span className="landBody__carrousel_line"> through artificial intelligence</span>
                            <span className="landBody__carrousel_line"> and step into the future</span>
                        </div>
                    </h3>
                    <button className="land_clearBtn hide-for-mobile">Start Now</button>
                </div>

                {/* <div className="landBody__right">
                    <Spline scene="https://prod.spline.design/BBzPL2OzksiWYTLi/scene.splinecode"/>
                </div> */}
            </div>
        </>
    )
};

export default MainBody;