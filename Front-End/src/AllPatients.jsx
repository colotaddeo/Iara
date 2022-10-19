import React from "react";
import { useEffect, useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useImages } from "./hooks/useImages";

const AllPatients = () => {
  const [active, setActive] = useState(false)
  //const { loadPatients, patients, createPatient, deletePatient } = useImages();
  const navigate = useNavigate();
  const { loadPatients, deletePatient, patients, createPatient } = useImages()
  useEffect(() => {
    loadPatients();
  }, []);
  console.log(patients);
  if (patients.length === 0)
    return (
      <div className="main_container">
      <Navbar active={active} current="Pacientes"/>
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
        <h1>Todavía no hay paciente subidos</h1>
        </div>
      </div>
    );
  return (
    <div className="main_container">
      <Navbar active={active} current="Pacientes"/>
      <div className="primary_container">
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
            <td onClick={() => navigate(`/AddRadiography/${patient.id}`)}> {patient.DNI} </td>
            <td onClick={() => navigate(`/AddRadiography/${patient.id}`)}> {patient.createdAt} </td>
            <button onClick={() => deletePatient(patient.id)}>Delete</button>
          </tr>
        ))}
      </table>
      <Formik
        initialValues={{
          DNI: "",
        }}
        validationSchema={Yup.object({
          DNI: Yup.number().required("El dni es requerido"),
        })}
        onSubmit={(values, actions) => {
          console.log(values);
          createPatient(values);
        }}
        >
        {({ handleChange, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <label>DNI</label>
            <Field name="DNI" placeholder="dni"></Field>
            <ErrorMessage name="DNI" />
            <button type="submit">Guardar</button>
          </Form>
        )}
      </Formik>
        </div>
    </div>
  );
};

export default AllPatients;
