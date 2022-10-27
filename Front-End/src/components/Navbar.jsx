import { useState, useEffect } from "react";
import logo from "../assets/logo-login.png";
import clock from "../assets/clock.png";
import user from "../assets/3 User.png";
import Settings from "../assets/SettingsIcon.png";
import "../components/pages/HomeTest/home.css";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { useImages } from "../hooks/useImages";

function Navbar({ active, current }) {
  const { doctors, getUserInfo } = useImages();

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className={"side_bar" + (active ? " closed" : "")}>
      <div className="logo_container">
        <h1>
          <img src={logo} alt="logo" /> IARA
        </h1>
      </div>
      <div className="side_bar_links">
        <Link to="/Home" className={current == "Recientes" ? "current" : ""}>
          <img src={clock} alt="clock" /> Recientes
        </Link>
        <Link
          to="/AllPatients"
          className={current == "Pacientes" ? "current" : ""}
        >
          <img src={user} alt="user" /> Pacientes
        </Link>
        <Link
          to="/Settings"
          className={current == "Configuracion" ? "current" : ""}
        >
          <img src={Settings} alt="Configuración" /> Configuración
        </Link>
        {doctors.map((doctor) => (
          <div key={doctor.id}>
            <h3>
              <PersonIcon></PersonIcon>
              {doctor.nombre} {doctor.apellido}
            </h3>
          {doctor.email == "PolloHospital@est.edu.ar" ? <h5>Hospital Pollo</h5>: <h5>Hospital Arroz</h5>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Navbar;
