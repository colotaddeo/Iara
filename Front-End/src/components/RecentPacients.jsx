import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate, useLocation } from "react-router-dom";
import "./RecentPacients.css";
import DeleteIcon from '@mui/icons-material/Delete';
import { useImages } from "../hooks/useImages";



import Navbar from "./Navbar";
const RecentPacients = () => {
  const { deletePatient, loadRecentPatients, patients } = useImages()
  //const [recentUsers, setRecentUsers] = useState();
  const [active, setActive] = useState(false);
  //const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  useEffect(() => {
    /*let estaMontado = true;
    const controller = new AbortController(); //Para cancelar la request

    const getRecentUsers = async () => {
      try {
        const response = await axiosPrivate.get("/patient/uploadedRecently", {
          signal: controller.signal,
        });

        estaMontado && setRecentUsers(response.data);
      } catch (err) {
        if (err.code === "ERR_CANCELED") console.error(err);
        else if (err.code === "ERR_NETWORK") {
          console.error(err);
        } else {
          console.error(err);
          navigate("/login");
        }
      }
    };

    getRecentUsers();

    return () => {
      estaMontado = false;
      controller.abort();
    };
    */
   loadRecentPatients()
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
          <h1>Bienvenido Dr. Rizzo</h1>
          <p>Nuestra mision es ayudarte</p>
        </div>
        <div className="pacientes_box">
      <h2>Pacientes recientes</h2>
      {patients?.length ? (
        <table>
          <thead>
            <tr>
              <th>DNI</th>
              <th>Ultima Modificacion</th>
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
      <button onClick={() => navigate("/AllPatients")}>
        Ver todos los pacientes
      </button>
          </div>
        </div>
    </div>
  );
};

export default RecentPacients;
