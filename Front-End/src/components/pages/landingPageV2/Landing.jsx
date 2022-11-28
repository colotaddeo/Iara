import React from "react";

//import components
import LandingNav from "./landingComponents/LandingNav";
import MainBody from "./landingComponents/MainBody"
import Features from "./landingComponents/Features";
import Team from "./landingComponents/Team";
import Collaboration from "./landingComponents/Collaboration";
import Footer from "./landingComponents/Footer";
import './scss/style.css';

const Landing = () => {

    return (
        <>
            <LandingNav></LandingNav>
            <MainBody></MainBody>
            <Features></Features>
            <Team></Team>
            <Collaboration></Collaboration>
            <Footer></Footer>
        </>
    );
};

export default Landing;