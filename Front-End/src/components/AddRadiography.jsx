import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useImages } from "../hooks/useImages";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import DeleteIcon from '@mui/icons-material/Delete';
import "./addRadiography.css"

const AddRadiography = () => {
  const { loadImages, images, deleteImage, uploadImage, getPatient, patients, getUserInfo, doctors } = useImages();
  const navigate = useNavigate();
  const { id } = useParams();
  const [active, setActive] = useState(false)
  const [index, setIndex] = useState(0);
  let i = 0;
  useEffect(() => {
    loadImages(id);
    getPatient(id);
    getUserInfo();
  }, []);

  if (images.length === 0)
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
        <h1>Todavía no hay imagenes subidas</h1>
        <Formik
        initialValues={{
          file: null,
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          uploadImage(id, values);
        }}
      >
        {({ handleChange, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <input
              type="file"
              name="file"
              onChange={(e) => setFieldValue("file", e.target.files[0])}
            />

            <button type="submit">Subir</button>
          </Form>
        )}
      </Formik>
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
        <div>
          <h1> Paciente: {patients.DNI} </h1>
        </div>
        <div className="hero__upload_rx_container">
      <div className="hero__radiografias_container">
        {images?.map((image)=> {
          i += 1;
          return (
            <div className="radiografias">
            <img src={image.ruta} id={i} onClick={(e)=> {
              setIndex(e.target.id-1)
              console.log(e.target.id-1)
            }} alt="side images" width={75}/>
            <h1>{i}</h1>
            </div>
          )
        })}
        
        
        <div>
        <div key={images[index].id} className="image_wrapper" onClick={() => getImageById(id, images[index].id)}>
          <h3>Primera predicción: {images[index].prediccion_cnn}</h3>
          <h3>Segunda predicción: {images[index].prediccion_transformers}</h3>
          <h3>Promedio de las predicciones: {images[index].prediccion_promedio}</h3>
          <img src={images[index].ruta} alt="Imagen con tuberculosis" />
          <DeleteIcon onClick={() => deleteImage(id, images[index].id)} className="btn_delete">Delete</DeleteIcon>
        </div>
      </div>
      </div>
      <div className="hero__upload_container">
      <Formik
        initialValues={{
          file: null,
        }}
        onSubmit={(values, actions) => {
          console.log(values);
          uploadImage(id, values);
        }}
      >
        {({ handleChange, handleSubmit, setFieldValue }) => (
          <Form onSubmit={handleSubmit}>
            <input
              type="file"
              name="file"
              onChange={(e) => setFieldValue("file", e.target.files[0])}
            />

            <button className="transparantBtn" type="submit">Subir</button>
          </Form>
        )}
      </Formik>
      </div>
    </div>
    </div>
    <footer className="footer__uploadRX">
        <p>Esto es tan solo una predicción que lo ayudará a realizar un diagnóstico más acertado.<br />
        Por favor a la hora de hacer el informe final del paciente tenga en cuenta los antecedentes y los síntomas</p>
      </footer>
    </div>
    </div>
  );
};

export default AddRadiography;
