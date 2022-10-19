import React from "react";
import { useState } from "react";
import logo from "../assets/logo-login.png";
import clock from "../assets/clock.png";
import user from "../assets/3 User.png";
import Settings from "../assets/SettingsIcon.png";
import "../components/pages/HomeTest/home.css";
import { Link } from "react-router-dom";

function  Navbar({active, current}) {
  return (
      <div className={"side_bar" + (active ? " closed" : "")}>
        <div className="logo_container">
          <h1>
            <img src={logo} alt="logo" /> IARA
          </h1>
        </div>
        <div className="side_bar_links">
          {/* <a href="#" ><img src={clock} alt="clock"/> Recientes</a>
                     <a href="#" ><img src={user} alt="user" /> Pacientes</a>
                     <a href="/configuracion"><img src={Settings} alt="Configuración" /> Configuración</a> */}

          <Link to="/Home" className={current == "Recientes" ? "current" : ""}>
            <img src={clock} alt="clock" /> Recientes
          </Link>
          <Link to="/AllPatients" className={current == "Pacientes" ? "current" : ""}>
            <img src={user} alt="user" /> Pacientes
          </Link>
          <Link to="/Settings" className={current == "Configuracion" ? "current" : ""}>
            <img src={Settings} alt="Configuración" /> Configuración
          </Link>
        </div>
      </div>
  );
}

export default Navbar;
