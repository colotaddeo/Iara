import React from "react";
import logo_text from "../images/logo_txt.svg"

const Footer = () => {

    return (
        <div id="contact" className="footer">
            <div className="footer__logo">
                <img src={logo_text} alt="IARA" />
                <span className="footer__line"></span>
            </div>
            <div className="footer__about">
                <h2>About</h2>
                <h2>Accesibility</h2>
                <h2>Follow us</h2>
            </div>
            <div className="footer__contact">
                <h2>Contact us</h2>
            </div>
        </div>
    )
};

export default Footer;