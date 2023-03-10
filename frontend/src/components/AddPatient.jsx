import React from "react";
import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useImages } from "../hooks/useImages";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

function AddPatient() {
  const { createPatient } = useImages();
  const navigate = useNavigate();
  return (
    <div>
      <Navbar />
      <Formik
        initialValues={{
          DNI: "",
          antecedentes: "",
        }}
        validationSchema={Yup.object({
          DNI: Yup.number()
            .required("El dni es requerido")
            .min(8, "Eso es un dni erróneo"),
          antecedentes: Yup.string()
            .required("Los sintomas son requeridos")
            .min(2, "Antecendentes muy cortos"),
        })}
        onSubmit={(values, actions) => {
          console.log(values);
          createPatient(values);
          navigate('/AddRadiography')
        }}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <label>dni</label>
            <Field name="DNI" placeholder="dni"></Field>
            <ErrorMessage name="DNI" />

            <label>Antecedentes</label>
            <Field
              name="antecedentes"
              as="textarea"
              placeholder="escribe los antecedentes"
            ></Field>
            <ErrorMessage name="antecedentes" />
            <button type="submit">Continuar</button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddPatient;
