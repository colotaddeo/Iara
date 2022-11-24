import React from "react";

//import components
import LandingNav from "./landingComponents/LandingNav";
import MainBody from "./landingComponents/MainBody"
import './scss/style.css';

const Landing = () => {

    return (
        <>
            <LandingNav></LandingNav>
            <MainBody></MainBody>
        </>
    );
};

export default Landing;