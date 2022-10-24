import React from "react";
import { useEffect, useContext, useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useImages } from "../hooks/useImages";
import DeleteIcon from '@mui/icons-material/Delete';
import '../components/AllPatients.css';
import SearchIcon from '@mui/icons-material/Search';


const AllPatients = () => {
  const [active, setActive] = useState(false)
  const navigate = useNavigate();
  const { loadPatients, deletePatient, patients, createPatient, getPatientsBySearch, getUserInfo, doctors } = useImages()
  useEffect(() => {
    loadPatients();
    getUserInfo();
  }, []);

  const [search, setSearch] = useState('');

  const SearchPatient = () => {
    if(search.length === 0){
      loadPatients();
    }
    else{
      if(search.trim()){
        console.log(search)
        getPatientsBySearch(search)
      }
    }
  }

  console.log(patients);
  if (patients.length === -1)
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
          {doctors.map((doctor) => (
            <div key={doctor.id}>
              <h1>Bienvenido/a Dr/a. {doctor.apellido}</h1>
              <p>Nuestra mision es ayudarte</p>
            </div>
          ))}
        </div>
        <h1>Todavía no hay paciente subidos</h1>
        </div>
      </div>
    );
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
          {doctors.map((doctor) => (
            <div key={doctor.id}>
              <h1>Bienvenido/a Dr/a. {doctor.apellido}</h1>
              <p>Nuestra mision es ayudarte</p>
            </div>
          ))}
        </div>
      <div className="hero_container">
      <div className="hero_elements">
        <div className="hero_table_search">
        <h2>Todos los pacientes</h2>
        <div className="hero_searchbar">
          <input className="hero_searchbar_text" placeholder="Buscar documento..." onKeyUp={SearchPatient} type="text" onChange={(e) => setSearch(e.target.value)}/> 
          {/* <SearchIcon className="btn_search" onClick={SearchPatient}></SearchIcon> */}
        </div>
        <div className="tablaWrapper">
          <div className="table-wrapper">
        <table className="tabla">
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
              <td><DeleteIcon onClick={() => deletePatient(patient.id)} className="btn_delete" ></DeleteIcon></td>
            </tr>

  ))}
        </table>
        </div>
        </div>
        </div>

        <div className="hero_input_button">
        <h2>Crear paciente</h2>
          <div className="formik_wrapper">
          <Formik
            initialValues={{
              DNI: "",
            }}
            validationSchema={Yup.object({
              // DNI: Yup.number().required("El dni es requerido"),
            })}
            onSubmit={(values, actions) => {
              console.log(values);
                createPatient(values);
            }}
            >
            {({ handleChange, handleSubmit }) => (
              <Form onSubmit={handleSubmit}>
                <Field className="hero_add_dni_field" name="DNI" placeholder="DNI..."></Field>
                <ErrorMessage name="DNI" />
                <button className="cyanBtn" type="submit">Agregar</button>
              </Form>
            )}
          </Formik>
          </div>
          </div>
        </div>
      </div>
        </div>
    </div>
  );
};

export default AllPatients;
