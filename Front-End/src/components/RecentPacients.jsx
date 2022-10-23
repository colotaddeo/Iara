import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import "./RecentPacients.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { useImages } from "../hooks/useImages";



import Navbar from "./Navbar";
const RecentPacients = () => {
  const { deletePatient, loadRecentPatients, patients, getUserInfo, doctors } = useImages()
  const [active, setActive] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
   loadRecentPatients();
   getUserInfo();
  }, []);

  return (
    <div className="main_container">
      <Navbar active={active} current="Recientes"/>
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
      {patients?.length ? (
        <table>
          <thead>
            <tr>
              <th>DNI</th>
              <th>Fecha de creación</th>
              <th></th>
            </tr>
          </thead>
          {patients.map((patient) => (
            <tr key={patient.id}>
              <td><a href={"/AddRadiography/" + patient.id }>{patient.DNI}</a></td>
              <td><a href={"/AddRadiography/" + patient.id }>{patient.createdAt} </a></td>
              <DeleteIcon onClick={() => deletePatient(patient.id)} className="btn_delete" ></DeleteIcon>
            </tr>
          ))}
        </table>
      ) : (
        <p>No hay pacientes subidos aún</p>
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
