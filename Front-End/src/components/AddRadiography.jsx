import { useEffect, useState } from "react";
import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useImages } from "../hooks/useImages";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";

const AddRadiography = () => {
  const { loadImages, images, deleteImage, uploadImage  } = useImages();
  const navigate = useNavigate();
  const { id } = useParams();


  useEffect(() => {
    loadImages(id);
    console.log(images)
  }, []);

  if (images.length === 0)
    return (
      <div>
        <Navbar />
        <h1>Todavía no hay imagenes subidas </h1>
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
    );
  return (
    <div>
      <Navbar />
      {images.map((image) => (
        <div key={image.id}>
          <h1>Primera predicción: {image.prediccion_cnn}</h1>
          <h1>Segunda predicción: {image.prediccion_transformers}</h1>
          <h1>Promedio de las predicciones: {image.prediccion_promedio}</h1>
          <img src={image.ruta} alt="Imagen con tuberculosis" />
          <button onClick={() => deleteImage(id, image.id)}>Delete</button>
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
  );
};

export default AddRadiography;
