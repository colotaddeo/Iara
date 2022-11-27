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
            <div className="landBody">
                <div className="landBody__left">
                    <h1 className="landBody__title">
                        <span>Enter a new techological era</span> <br />
                        <span>with </span> <span className="landBody__title_cyan">IARA</span>
                    </h1>
                    <h3 className="landBody__subtitle">Improve diagnostics completely free of charge</h3>
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