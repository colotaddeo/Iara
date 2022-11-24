import React from "react";

//import components
import LandingNav from "./landingComponents/LandingNav";
import './scss/style.css';

const Landing = () => {

    return (
        <>
            <LandingNav></LandingNav>
            <br />
            <p>This is body</p>
        </>
    );
};

export default Landing;