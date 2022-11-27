import React from "react";

//import components
import LandingNav from "./landingComponents/LandingNav";
import MainBody from "./landingComponents/MainBody"
import Features from "./landingComponents/Features";
import './scss/style.css';

const Landing = () => {

    return (
        <>
            <LandingNav></LandingNav>
            <MainBody></MainBody>
            <Features></Features>
        </>
    );
};

export default Landing;