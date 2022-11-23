import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import "./RecentPacients.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useImages } from "../hooks/useImages";
import PersonOffIcon from "./pages/landingPage/images/empty_user_icon.svg";
import DeletePopUp from "./DeletePopUp";
import DeleteWarning from "./pages/HomeTest/images/Warning_alert.svg";
import Previsualizacion from "./Previsualizacion";

import Navbar from "./Navbar";
const RecentPacients = () => {
  const {
    deletePatient,
    loadRecentPatients,
    patients,
    getUserInfo,
    doctors,
    getImageById,
    images,
    pId,
  } = useImages();
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const [openModel, setOpenModel] = useState(false);
  const [patientId, setPatientId] = useState("");
  const [selectedRx, setSelected] = useState("");
  const [selectedDni, setDni] = useState(null);
  const [loading, setLoading] = useState(true);
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    setLoading(true);
    loadRecentPatients().then(() => {
      setLoading(false);
    });
    getUserInfo();
  }, []);

  if (loading) {
    return (
      <div className="main_container">
        <Navbar active={active} current="Pacientes" />
        <div className="primary_container">
          <div
            className="banner"
            onClick={(e) => {
              setActive(!active);
            }}
          >
            {doctors.map((doctor) => (
              <div key={doctor.id}>
                <h1>Hola Dr/a. {doctor.apellido}</h1>
                <p>Nuestra mision es ayudarte</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (patients.length === 0) {
    return (
      <div className="main_container">
        <Navbar active={active} current="Recientes" />
        <div className="primary_container">
          <div
            className="banner"
            onClick={(e) => {
              setActive(!active);
            }}
          >
            {doctors.map((doctor) => (
              <div key={doctor.id}>
                <h1>Hola Dr/a. {doctor.apellido}</h1>
                <p>Nuestra mision es ayudarte</p>
              </div>
            ))}
          </div>
          <div className="hero_container">
            <h1>Recientes</h1>
            <div className="hero_recent_empty">
              <div className="hero_empty_icon">
                <img src={PersonOffIcon} width={150}></img>
              </div>
              <p className="hero_empty_p">
                Aún no hay pacientes registrados, <br />
                puedes registrarlos{" "}
                <span
                  className="hero_empty_p_cyan"
                  onClick={() => navigate("/AllPatients/")}
                >
                  aquí
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  return (
    <div className="main_container">
      <Navbar active={active} current="Recientes" />
      <div className="primary_container">
        <div
          className="banner"
          onClick={(e) => {
            setActive(!active);
          }}
        >
          {doctors.map((doctor) => (
            <div key={doctor.id}>
              <h1>Hola Dr/a. {doctor.apellido}</h1>
              <p>Nuestra mision es ayudarte</p>
            </div>
          ))}
        </div>
        <div className="hero_container">
          <div className="hero_elements">
            <div className="hero_recentTable">
              <div className="table-wrapper">
                <h1>Recientes</h1>
                <table className="tabla">
                  <thead>
                    <tr>
                      <th>DNI</th>
                      <th>Fecha de creación</th>
                      <th></th>
                    </tr>
                  </thead>
                  {patients.map((patient) => (
                    <tr
                      key={patient.id}
                      onClick={() => {
                        setSelected(patient.id);
                        setDni(patient.DNI);
                        getImageById(patient.id);
                        setClicked(true)

                      }}
                      onDoubleClick={() =>
                        navigate("/AddRadiography/" + selectedRx)
                      }
                    >
                      <td>
                        <a>{patient.DNI}</a>
                      </td>
                      <td>
                        <a>{patient.createdAt} </a>
                      </td>
                      <td>
                        <DeleteIcon
                          onClick={() => {
                            setOpenModel(true);
                            setPatientId(patient.id);
                          }}
                          className="btn_delete"
                        ></DeleteIcon>
                      </td>
                    </tr>
                  ))}
                </table>
                <button
                  className="blandBtn"
                  onClick={() => navigate("/AllPatients")}
                >
                  Ver listado de todos los pacientes
                </button>
                {openModel && (
                  <DeletePopUp
                    setOpenModel={setOpenModel}
                    patientId={patientId}
                    DeleteWarning={DeleteWarning}
                  />
                )}
              </div>
            </div>
            {clicked && <Previsualizacion selectedDni={selectedDni} images={images} patientId={selectedRx} /> }
            {/* {images?.length ? (
              <div className="hero_preview_image_wrapper hero_recent_preview">
                <div className="hero_ultima_prediccion">
                {images.map((image) => (
                  <div key={image.id}>
                    <img
                      src={image.ruta}
                      alt="Imagen con tuberculosis"
                      width={250}
                    />
                        <div className="ultima_prediccion_titles">
                          <h2>
                            DNI: <span> {selectedDni} </span>
                          </h2>
                          <h2>
                            Ultima predicción 1:{" "}
                            <span> {image.prediccion_cnn} </span>
                          </h2>
                          <h2>
                            Ultima predicción 2:{" "}
                            <span> {image.prediccion_transformers} </span>
                          </h2>
                          <h2 className="iara_cyan">
                            Promedio: <span> {image.prediccion_promedio} </span>
                          </h2>
                        </div>
                      </div>
                    ))}
                  </div>
                  <button
                    onClick={() => navigate("/AddRadiography/" + selectedRx)}
                    className="blandTransparantBtn"
                  >
                    Ver más
                  </button>
                </div>
              ) : (
                <div className="hero_preview_image_wrapper recent_no_rx_found">
                  <div className="no_rx_found">
                    <img src={NoneFoundWarning} alt="No patients Image" />
                    <h1 className="hero_empty_p">DNI: <span className="iara_cyan">{selectedDni}</span></h1>
                    <p className="hero_empty_p">
                      Este paciente no tiene<br />
                      radiografías para mostrar,<br />
                      puedes subir una&nbsp;
                      <span 
                      className="hero_empty_p_cyan" 
                      onClick={() => navigate("/AddRadiography/" + selectedRx)}>
                        aquí
                      </span>
                    </p>
                  </div>
                </div>
              )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentPacients;
