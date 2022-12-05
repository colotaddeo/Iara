import React from "react";

//import components
import LandingNav from "./landingComponents/LandingNav";
import MainBody from "./landingComponents/MainBody"
import WhatDoesIara from "./landingComponents/WhatDoesIara";
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
            <WhatDoesIara></WhatDoesIara>
            <Features></Features>
            <Team></Team>
            <Collaboration></Collaboration>
            <Footer></Footer>
        </>
    );
};

export default Landing;