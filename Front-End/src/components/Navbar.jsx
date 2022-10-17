import React from "react";
import { useState } from "react";
import logo from "../assets/logo-login.png";
import clock from "../assets/clock.png";
import user from "../assets/3 User.png";
import Settings from "../assets/SettingsIcon.png";
import "../components/pages/HomeTest/home.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [active, setActive] = useState(false);
  return (
    <div className="main_container">
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

          <Link to="/Home">
            <img src={clock} alt="clock" /> Recientes
          </Link>
          <Link to="/AllPatients">
            <img src={user} alt="user" /> Pacientes
          </Link>
          <Link to="/Settings">
            <img src={Settings} alt="Configuración" /> Configuración
          </Link>
        </div>
      </div>
      <div className="primary_container">
        <div
          className="banner"
          onClick={(e) => {
            setActive(!active);
          }}
        >
          <h1>Bienvenido Dr. Rizzo</h1>
          <p>Nuestra mision es ayudarte</p>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
