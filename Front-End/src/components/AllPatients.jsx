import React from "react";
import { useEffect, useContext, useState } from "react";
import { useNavigate, Link, Navigate } from "react-router-dom";
import Navbar from "./Navbar";
import { Form, Formik, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useImages } from "../hooks/useImages";
import DeleteIcon from "@mui/icons-material/Delete";
import "../components/AllPatients.css";
import SearchIcon from "@mui/icons-material/Search";
import PersonOffIcon from "@mui/icons-material/PersonOff";
import DeletePopUp from "./DeletePopUp";

const AllPatients = () => {
  const [active, setActive] = useState(false);
  const [selectedRx, setSelected] = useState("");
  const [selectedDni, setDni] = useState(null);

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
    loadPatients();
    getUserInfo();
  }, []);

  const [search, setSearch] = useState("");
  const [openModel, setOpenModel] = useState(false)
  const [patientId, setPatientId] = useState("")

  const SearchPatient = () => {
    if (search.length === 0) {
      loadPatients();
    } else {
      if (search.trim()) {
        console.log(search);
        getPatientsBySearch(search);
      }
    }
  };

  console.log(patients);
  // if (patients.length === -1)
  //   return (
  //     <div className="main_container">
  //       <Navbar active={active} current="Pacientes" />
  //       <div className="primary_container">
  //         <div
  //           className="banner"
  //           onClick={(e) => {
  //             setActive(!active);
  //           }}
  //         >
  //           {doctors.map((doctor) => (
  //             <div key={doctor.id}>
  //               <h1>Bienvenido/a Dr/a. {doctor.apellido}</h1>
  //               <p>Nuestra mision es ayudarte</p>
  //             </div>
  //           ))}
  //         </div>
  //         <h1>Todavía no hay paciente subidos</h1>
  //       </div>
  //     </div>
  //   );

  if (patients.length === 0)
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
                <h1>Bienvenido/a Dr/a. {doctor.apellido}</h1>
                <p>Nuestra mision es ayudarte</p>
              </div>
            ))}
          </div>
          <div className="hero_container">
            <div className="hero_elements">
              <h2>Todos los pacientes</h2>
              <div>
                <PersonOffIcon></PersonOffIcon>
                <h3>Aún no hay pacientes registrados, puedes registrarlos</h3>
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
                        <Field
                          className="hero_add_dni_field"
                          name="DNI"
                          placeholder="DNI..."
                        ></Field>
                        <ErrorMessage name="DNI" />
                        <button className="cyanBtn" type="submit">
                          Agregar
                        </button>
                      </Form>
                    )}
                  </Formik>
                  <p>
                    Para registrar un nuevo paciente, ingresa su DNI. No
                    solicitamos mas información sensible para no comprometer su
                    integridad.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );

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
              <h1>Bienvenido/a Dr/a. {doctor.apellido}</h1>
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
                      <tr
                        key={patient.id}
                        onClick={() => {
                          setSelected(patient.id);
                          setDni(patient.DNI);
                          getImageById(patient.id);
                        }}
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
              {/* {openModel && <DeletePopUp closePopUp={setOpenModel} patientId= {patientId} />} */}
              {openModel && <div>
                <h1>Estás a punto de borrar un paciente incluyendo todo su historial de radiografías y predicciones. Esta acción es IRREVERSIBLE</h1>
                <button onClick={() => setOpenModel(false) } className="cyanBtn">Cancelar operación</button>
                <button onClick={() => {
                  deletePatient(patientId)
                  setOpenModel(false);
                }} className="cyanBtn">Continuar</button>
              </div>}
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
                      <button className="cyanBtn" type="submit">
                        + Agregar paciente
                      </button>
                    </Form>
                  )}
                </Formik>
              </div>
              {images?.length ? (
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
                    className="cyanBtn"
                  >
                    Ver más
                  </button>
                </div>
              ) : (
                <div>
                  <h1>No hay documentos subidos aún</h1>
                  <button
                    onClick={() => navigate("/AddRadiography/" + selectedRx)}
                    className="cyanBtn"
                  >
                    Subir una radiografia
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllPatients;
