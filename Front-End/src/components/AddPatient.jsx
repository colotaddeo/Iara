import React from 'react'
import * as Yup from "yup";
import { Form, Formik, Field, ErrorMessage } from "formik";
import { useImages } from "../hooks/useImages";
import { useNavigate } from "react-router-dom";



function AddPatient() {
    const { createPatient } = useImages();
    const navigate = useNavigate();
    return (
      <div>
        <Formik
          initialValues={{
            DNI: "",
            antecedentes: ""
          }}
          /*validationSchema={Yup.object({
              dni: Yup.number().required("El dni es requerido"),
              sintomas: Yup.string().required("Los sintomas son requeridos"),
              seguimiento: Yup.string().required("El seguimiento es requerido"),
          })}
          */
          onSubmit={(values, actions) => {
              console.log(values);
              createPatient(values);
          }}
        >
          {({ handleChange, handleSubmit }) => (
            <Form onSubmit={handleSubmit}>
              <label>dni</label>
              <Field name="DNI" placeholder="dni"></Field>
              {/* <ErrorMessage name="dni"/> */}
  
              <label>Antecedentes</label>
              <textarea
                name="antecedentes"
                rows="3"
                placeholder="escribe los antecedentes"
                onChange={handleChange}
              ></textarea>
              {/* <ErrorMessage name="sintomas"/> */}
              <button type="submit" >Continuar</button>
            </Form>
          )}
        </Formik>
      </div>
    );
}

export default AddPatient