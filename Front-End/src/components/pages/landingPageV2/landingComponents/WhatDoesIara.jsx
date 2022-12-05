import React from "react";

import circles from "../images/whatDoes_circles.svg"

const WhatDoesIara = () => {
    
    return (
        <div className="whatDo">
            <div className="features__title">
                <h1>What does IARA do?</h1>
                <h3>
                    With the use of artificial intelligence, IARA detects common
                    syntoms of tuberculosis
                </h3>
            </div>

            <div className="whatDo__body">
                <div className="whatDo__body_left">
                    <h1>
                        <span>Multiple </span>
                        <span className="iara_cyan">Inteligences</span>
                    </h1>
                    <h3>
                        <span>
                            So as to determine a patients likelyhood of
                            having tuberculosis, the radiography walks
                            through a 
                        </span>
                        <span className="iara_cyan"> multi-ai </span>
                        <span>process </span>
                    </h3>   
                </div>
                <div className="whatDo__body_right">
                    <img src={circles} alt="circle" />
                </div>
            </div>
        </div>
    )
};

export default WhatDoesIara;