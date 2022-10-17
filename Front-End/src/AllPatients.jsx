import React from "react";
import { useEffect } from "react";
import { useImages } from "./hooks/useImages";
import { useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";

const AllPatients = () => {
  const { loadPatients, patients } = useImages();
  const navigate = useNavigate();

  useEffect(() => {
    loadPatients();
  }, []);

  if (patients.length === 0)
    return (
      <div>
        <h1>Todavía no hay paciente subidos</h1>
      </div>
    );
  return (
    <div>
      <Navbar />
      <h2>Todos los pacientes</h2>
      <table>
        <thead>
          <tr>
            <th>DNI</th>
            <th>Ultima Modificacion</th>
          </tr>
        </thead>
        {patients.map((patient) => (
          <tr key={patient.id}>
            <td> {patient.DNI} </td>
            <td> {patient.createdAt} </td>
          </tr>
        ))}
      </table>
      <button onClick={() => navigate("/AddPatient")}>Agregar paciente</button>
    </div>
  );
};

export default AllPatients;
