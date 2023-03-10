import React from "react";
import { useEffect, useContext, useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Form, Formik, Field, ErrorMessage, isEmptyArray } from "formik";
import * as Yup from "yup";
import { useImages } from "../hooks/useImages";
import DeleteIcon from "@mui/icons-material/Delete";
import "../components/AllPatients.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOffIcon from "./pages/landingPage/images/empty_user_icon.svg";
import DeletePopUp from "./DeletePopUp";
import DeleteWarning from "./pages/HomeTest/images/Warning_alert.svg";
import NoneFoundWarning from "../assets/Warning_yellow.svg";
import Previsualizacion from "./Previsualizacion";

const AllPatients = () => {
  const [active, setActive] = useState(false);
  const [selectedRx, setSelected] = useState("");
  const [selectedDni, setDni] = useState(null);
  const [clicked, setClicked] = useState(false);


  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const {
    loadPatients,
    deletePatient,
    patients,
    createPatient,
    getPatientsBySearch,
    getUserInfo,
    doctors,
    getImageById,
    images,
  } = useImages();
  useEffect(() => {
    setLoading(true);
    loadPatients()
      .then(() => {
        setLoading(false);
      })
    getUserInfo();
  }, []);

  const [search, setSearch] = useState("SOMOSNUEVE");
  const [openModel, setOpenModel] = useState(false)
  const [patientId, setPatientId] = useState("")

  const SearchPatient = () => {
    setLoading(true);
    if (search.length === 0) {
      loadPatients()
        .then(() => {
          setLoading(false);
        })
    } else {
      if (search.trim()) {
        console.log(search);
        getPatientsBySearch(search);
      }
    }
  };

  if(loading && search === "SOMOSNUEVE"){
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
    )
  }

  if (patients.length === 0 && search === "SOMOSNUEVE") {
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
          <div className="hero_container">
            <div className="hero_elements">
              <div className="hero_table_search">
                <h1>Pacientes</h1>
                <div className="hero_empty_searchbar">
                  <div className="hero_empty_icon">
                    <img src={PersonOffIcon}
                      width={150}>
                    </img>
                  </div>
                  <p className="hero_empty_p">
                    No hay pacientes registrados, si <br />
                    los hubiese aparecerían aquí
                  </p>
                </div>
              </div>
              <div className="hero_input_button">
                <h1>Crear paciente</h1>
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
                        <Field
                          className="hero_add_dni_field"
                          name="DNI"
                          placeholder="DNI del paciente..."
                        ></Field>
                        <ErrorMessage name="DNI" />
                        <button className="blandBtn" type="submit">
                          + Agregar paciente
                        </button>
                      </Form>
                    )}
                  </Formik>
                  <div className="hero_empty_info">
                    <p className="hero_empty_p">
                      Para registrar un nuevo paciente,
                      ingresa su DNI. No
                      solicitamos mas información sensible para no comprometer su
                      integridad.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
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
        <div className="hero_container">
          <div className="hero_elements">
            <div className="hero_table_search">
              <h1>Pacientes</h1>
              <div className="hero_searchbar">
                <input
                  className="hero_searchbar_text"
                  placeholder="Buscar paciente..."
                  onKeyUp={SearchPatient}
                  type="text"
                  onChange={(e) => setSearch(e.target.value)}
                />
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
                      <tr
                        key={patient.id}
                        onClick={() => {
                          setSelected(patient.id);
                          setDni(patient.DNI);
                          getImageById(patient.id);
                          setClicked(true)
                        }}
                        onDoubleClick={() => navigate("/AddRadiography/" + selectedRx)}
                      >
                        <td>
                          <a>{patient.DNI}</a>
                        </td>
                        <td>
                          <a>{patient.createdAt} </a>
                        </td>
                        {/* <td><DeleteIcon onClick={() => deletePatient(patient.id)} className="btn_delete" ></DeleteIcon></td>  */}
                        <td><DeleteIcon onClick={() => {
                          setOpenModel(true);
                          setPatientId(patient.id)
                        }} className="btn_delete" ></DeleteIcon></td>
                      </tr>
                    ))}
                  </table>
                </div>
              </div>
            </div>

            <div className="hero_input_button">
              <h1>Crear paciente</h1>
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
                      <Field
                        className="hero_add_dni_field"
                        name="DNI"
                        placeholder="Ingrese el DNI del paciente..."
                      ></Field>
                      <ErrorMessage name="DNI" />
                      <button className="blandBtn" type="submit">
                        + Agregar paciente
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
              {clicked && <Previsualizacion selectedDni={selectedDni} images={images} patientId={selectedRx} /> }
              {/* {images?.length ? (
                <div className="hero_preview_image_wrapper">
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
                <div className="hero_preview_image_wrapper">
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
                    
                     <button
                      onClick={() => navigate("/AddRadiography/" + selectedRx)}
                      className="blandTransparantBtn"
                    >
                      Subir una radiografia
                    </button> 
                  </div>
                </div>
              )} */}
            </div>
          </div>
        </div>
      </div>
      {openModel &&
        <DeletePopUp
          setOpenModel={setOpenModel}
          patientId={patientId}
          DeleteWarning={DeleteWarning}
        />}
    </div>
  );
};

export default AllPatients;
