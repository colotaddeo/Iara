import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useImages } from "../hooks/useImages";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import DeleteIcon from '@mui/icons-material/Delete';

const AddRadiography = () => {
  const { loadImages, images, deleteImage, uploadImage, getPatient, patients } = useImages();
  const navigate = useNavigate();
  const { id } = useParams();
  const [active, setActive] = useState(false)

  useEffect(() => {
    loadImages(id);
    getPatient(id);
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
          <h1>Bienvenido Dr. Rizzo</h1>
          <p>Nuestra mision es ayudarte</p>
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
          <h1>Bienvenido Dr. Rizzo</h1>
          <p>Nuestra mision es ayudarte</p>
        </div>
        <div>
          <h1> Paciente: {patients.DNI} </h1>
        </div>
        <br />
      {images?.map((image) => (
        <div key={image.id}>
          <h3>Primera predicción: {image.prediccion_cnn}</h3>
          <h3>Segunda predicción: {image.prediccion_transformers}</h3>
          <h3>Promedio de las predicciones: {image.prediccion_promedio}</h3>
          <img src={image.ruta} alt="Imagen con tuberculosis" />
          <DeleteIcon onClick={() => deleteImage(id, image.id)} className="btn_delete">Delete</DeleteIcon>
        </div>
      ))}
      <p>Esto es tan solo una predicción que lo ayudará a realizar un diagnóstico más acertado. Por favor a la hora de hacer el informe final del paciente tenga en cuenta los antecedentes y los síntomas</p>
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
};

export default AddRadiography;
