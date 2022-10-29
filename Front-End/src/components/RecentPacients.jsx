import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import "./RecentPacients.css";
import DeleteIcon from "@mui/icons-material/Delete";
import { useImages } from "../hooks/useImages";
import PersonOffIcon from '@mui/icons-material/PersonOff';

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
    pId
  } = useImages();
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  const [openModel, setOpenModel] = useState(false)
  const [patientId, setPatientId] = useState("")

  useEffect(() => {
    loadRecentPatients();
    getUserInfo();
  }, []);

  if (patients.length === 0)

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
              <h1>Bienvenido/a Dr/a. {doctor.apellido}</h1>
              <p>Nuestra mision es ayudarte</p>
            </div>
          ))}
        </div>
        <div className="pacientes_box">
          <h1>Aún no hay pacientes recientes</h1>
          <PersonOffIcon></PersonOffIcon>
          <h3>Aún no hay pacientes registrados, puedes registrarlos <Link to={"/AllPatients"}>aquí</Link></h3>
        </div>
      </div>
    </div>
  );

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
              <h1>Bienvenido/a Dr/a. {doctor.apellido}</h1>
              <p>Nuestra mision es ayudarte</p>
            </div>
          ))}
        </div>
        <div className="pacientes_box">
          <h2>Pacientes recientes</h2>

  
            <table>
              <thead>
                <tr>
                  <th>DNI</th>
                  <th>Fecha de creación</th>
                  <th></th>
                </tr>
              </thead>
              {patients.map((patient) => (
                <tr key={patient.id} onClick={() => getImageById(patient.id)}>
                  <td>
                    <a>{patient.DNI}</a>
                  </td>
                  <td>
                    <a>{patient.createdAt} </a>
                  </td>
                  <DeleteIcon
                    onClick={() => {
                      setOpenModel(true);
                      setPatientId(patient.id)
                    }}
                    className="btn_delete"
                  ></DeleteIcon>
                </tr>
              ))}
            </table>
            {openModel && <div>
                <h1>Estás a punto de borrar un paciente incluyendo todo su historial de radiografías y predicciones. Esta acción es IRREVERSIBLE</h1>
                <button onClick={() => setOpenModel(false) } className="cyanBtn">Cancelar operación</button>
                <button onClick={() => {
                  deletePatient(patientId)
                  setOpenModel(false);
                }} className="cyanBtn">Continuar</button>
              </div>}
          {images?.length ? (
            <div className="hero_preview_image_wrapper">
              <div className="hero_ultima_prediccion">
              {images.map((image) => (
                <div key={image.id}>
                  <h1>{image.prediccion_cnn}</h1>
                  <h1> {image.prediccion_transformers} </h1>
                  <h1> {image.prediccion_promedio} </h1>
                  <img
                    src={image.ruta}
                    alt="Imagen con tuberculosis"
                    width={250}
                  />
                  <button
                    className="cyanBtn"
                    onClick={() => navigate(`/AddRadiography/${pId}`)}
                  >
                    Ver mas
                  </button>
                </div>
              ))}
              </div>

            </div>
          ) : (
            <div>
              <h3>No hay documentos subidos aún</h3>
              <Link to={`/AddRadiography/${pId}`}>
                Suba una imagen aquí
              </Link>
            </div>
          )}

          <button className="cyanBtn" onClick={() => navigate("/AllPatients")}>
            Ver todos los pacientes
          </button>
        </div>
      </div>
    </div>
  );
};

export default RecentPacients;
