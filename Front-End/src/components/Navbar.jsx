import { useState, useEffect } from "react";
import logo from "./pages/landingPage/images/logoTxt.svg";
import clock from "../assets/clock.png";
import user from "../assets/3 User.png";
import Settings from "../assets/SettingsIcon.png";
import "../components/pages/HomeTest/home.css";
import { Link } from "react-router-dom";
import PersonIcon from "@mui/icons-material/Person";
import { useImages } from "../hooks/useImages";

function Navbar({ active, current }) {
  const { doctors, getUserInfo, logout } = useImages();
  const [openModel, setOpenModel] = useState(false);

  useEffect(() => {
    getUserInfo();
  }, []);

  return (
    <div className={"side_bar" + (active ? " closed" : "")}>
      <div className="logo_container">
        <h1>
          <img 
            src={logo} 
            alt="logo"
            width={150} />
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
        {/* <Link
          to="/Settings"
          className={current == "Configuracion" ? "current" : ""}
        >
          <img src={Settings} alt="Configuración" /> Configuración
        </Link> */}
      </div>
      <div 
        className="user_hover_logout"
        onMouseOver={() => setOpenModel(true)}
        onMouseOut={() => setOpenModel(false)}
        >
        {openModel && (
          <div className="logout_BtnBubble">
            <button onClick={() => logout()} className="speach_btn btnArrow">
              Cerrar sesión
            </button>
          </div>
        )}

        <div className="side_bar_user">
          {doctors.map((doctor) => (
            <div
              className="side_bar_user_container"
              key={doctor.id}
              onMouseOver={() => setOpenModel(true)}
              onMouseOut={() => setOpenModel(false)}
            >
              <PersonIcon></PersonIcon>
              <div className="side_bar_user_info">
                <h3>
                  {doctor.nombre} {doctor.apellido}
                </h3>
                {doctor.email == "PolloHospital@est.edu.ar" ? (
                  <h5>Hospital Umai</h5>
                ) : (
                  <h5>Hospital Muñiz</h5>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
