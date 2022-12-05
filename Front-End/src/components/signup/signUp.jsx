import React, { useState, useEffect, useRef } from "react";
import "./signUp.css";
import Imagen from "../.././assets/Doctora1.png";
import { Link, Navigate } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { styled } from "@mui/system";
import * as Yup from "yup";
import axios from "../../api/axios";
import Select from "../Select";
import { useNavigate } from "react-router-dom";

const signUp = () => {
  // const [hospital, sethospital] = useState("");

  // const handleChangehospital = (event) => {
  //   sethospital(event.target.value);
  //   console.log(event.target.value);
  // };

  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");

  const valoresIniciales = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    doctorId: "",
  };

  const validationSchema = Yup.object({
    firstName: Yup.string()
      .required("Campo obligatorio")
      .min(2, "Too Short!")
      .max(50, "Too Long!"),

    lastName: Yup.string()
      .required("Campo obligatorio")
      .min(2, "Too Short!")
      .max(50, "Too Long!"),

    email: Yup.string().required("Campo obligatorio").email("Email inválido"),

    password: Yup.string()
      .required("Campo obligatorio")
      .min(2, "Too Short!")
      .max(50, "Too Long!"),

    confirmPassword: Yup.string()
      .required("Campo obligatorio")
      .oneOf([Yup.ref("password")], "Las passwords no coinciden"),

    //HospitalEmail: Yup.string().required("Campo obligatorio"),

    doctorId: Yup.string()
      .required("Campo obligatorio")
      .min(2, "Too Short!")
      .max(50, "Too Long!"),
  });

  const fetchAxios = async (valoresIniciales) => {
    try {
      const response = await axios.post("/user/signup", valoresIniciales);

      navigate("/login");

      console.log(response);
    } catch (err) {
      if (err.response.status === 409) {
        setErrMsg("El usuario ya existe");
      }else {
        setErrMsg("El servidor no ha podido responder");
      }
      errRef.current.focus();
    }
  };

  const navigate = useNavigate();

  return (
    <div className="all-container">
      <div className="imagen">
        <img src={Imagen} alt="IMagen ilustrativa" />
      </div>

      <div className="form">
        <h2>Registro</h2>
        <p ref={errRef}>{errMsg}</p>

        <Formik
          initialValues={valoresIniciales}
          validationSchema={validationSchema}
          onSubmit={(valoresIniciales) => {
            fetchAxios(valoresIniciales);
            alert("Los datos han sido enviados exitosamente");
            console.log(valoresIniciales);
            formikHelpers.resetForm();
            navigate("/login");
          }}
        >
          {({ errors, isValid, touched, dirty }) => (
            <Form>
              <div
                className="nombre_apellido"
                sx={{
                  w: "100%",
                  mb: 2,
                }}
              >
                <Field
                  id="firstName"
                  name="firstName"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Nombre"
                  error={
                    Boolean(errors.firstName) && Boolean(touched.firstName)
                  }
                  helperText={Boolean(touched.firstName) && errors.firstName}
                  className="input__signup"
                />

                <Field
                  sx={{
                    ml: 2,
                    mb: 2,
                  }}
                  id="lastName"
                  name="lastName"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Apellido"
                  size="normal"
                  error={Boolean(errors.lastName) && Boolean(touched.lastName)}
                  helperText={Boolean(touched.lastName) && errors.lastName}
                  className="input__signup"
                />
              </div>

              <Field
                sx={{
                  minWidth: 1,
                  my: 2,
                }}
                id="email"
                name="email"
                type="email"
                className="input__signup"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Email"
                error={Boolean(errors.email) && Boolean(touched.email)}
                helperText={Boolean(touched.email) && errors.email}
              />

              <Field
                sx={{
                  minWidth: 1,
                  my: 2,
                }}
                id="password"
                name="password"
                type="password"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Contraseña"
                size="normal"
                error={Boolean(errors.password) && Boolean(touched.password)}
                helperText={Boolean(touched.password) && errors.password}
                className="input__signup"
              />
              <Field
                sx={{
                  minWidth: 1,
                  my: 2,
                }}
                id="confirmPassword"
                name="confirmPassword"
                type="password"
                as={TextField}
                variant="outlined"
                color="primary"
                label="Confirmar contraseña"
                error={
                  Boolean(errors.confirmPassword) &&
                  Boolean(touched.confirmPassword)
                }
                helperText={
                  Boolean(touched.confirmPassword) && errors.confirmPassword
                }
                className="input__signup"
              />
              <div className="nombre_apellido">
                <FormControl
                  sx={{
                    my: 2,
                    minWidth: 0.45,
                  }}
                >
                  <Select
                    name="HospitalEmail"
                    label="Hospital correspondiente"
                  />
                </FormControl>
                <Field
                  sx={{
                    ml: 2,
                    my: 2,
                  }}
                  id="doctorId"
                  name="doctorId"
                  type="text"
                  as={TextField}
                  variant="outlined"
                  color="primary"
                  label="Matrícula"
                  error={Boolean(errors.doctorId) && Boolean(touched.doctorId)}
                  helperText={Boolean(touched.doctorId) && errors.doctorId}
                  className="input__signup"
                />
              </div>

              <Button
                sx={{
                  display: "block",
                  minWidth: 1,
                }}
                variant="contained"
                type="submit"
                size="large"
                disabled={!dirty || !isValid}
              >
                Continuar
              </Button>
            </Form>
          )}
        </Formik>

        <div className="button-container flex flex-jc-r">
          <h4>
            ¿Ya tenes cuenta?&nbsp;
            <Link to="/login">
              <span className="login__subtext_cyan">Ingresá</span>
            </Link>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default signUp;
