import React from "react";
import { useRef } from "react";
import Spline from '@splinetool/react-spline';

const MainBody = () => {
    const lung = useRef();

    function onLoad(spline) {
      const obj = spline.findObjectById('aefd2ae6-c6c5-4709-9e01-5400590d01a4');
  
      lung.current = obj;
    }

    function moveObj() {
        console.log(lung.current);
        // move the object in 3D space for testing
        lung.current.position.x += 20;
      }

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
                            <span className="landBody__carrousel_line"> through artificial inteligence</span>
                            <span className="landBody__carrousel_line"> and step into the future</span>
                        </div>
                    </h3>
                    <button className="land_clearBtn" onClick={moveObj}>Start Now</button>
                </div>

                <div className="landBody__right">
                    {/* <Spline scene="https://prod.spline.design/BBzPL2OzksiWYTLi/scene.splinecode" onLoad={onLoad} /> */}
                </div>
            </div>
        </>
    )
};

export default MainBody;