import React, { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import Home from "../home/Home";
import { Formik, Form, Field } from "formik";
import "./logIn.css";
import Imagen from "../../../assets/Doctora1.png";
import Logo from "../../../assets/logo-login.png";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup";
import axios from "../../../api/axios";
import useAuth from "../../../hooks/useAuth";

const LogIn = () => {
  const { setAuth } = useAuth();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");

  const navigate = useNavigate();
  /*const location = useLocation();
  const from = location.state?.from?.pathname || "/Home";
  */

  const valoresIniciales = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Campo obligatorio").email("Email inválido"),

    password: Yup.string().required("Campo obligatorio"),
  });
  /*
  const fetchinfo = (valoresIniciales) => {

    
    fetch("http://localhost:4000/user/signin",{

      method: "POST",
      body: JSON.stringify(valoresIniciales),
      headers: {"Content-Type" : "application/json" }

    })

    .then(res => res.json())
    .catch(error => console.log("Error", error))
    .then(response => console.log(response))
  }
  */

  const useAxios = async (valoresIniciales) => {
    try {
      console.log(valoresIniciales);
      const response = await axios.post(
        "/user/signin",
        JSON.stringify(valoresIniciales),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      const accessToken = response.data.accessToken;
      console.log(response.data);
      console.log(accessToken);
      setAuth({ valoresIniciales, accessToken });
      //console.log(from)
      //navigate(from, { replace: true })
      navigate("/Home");
    } catch (err) {
      if (err.response.status === 404) {
        setErrMsg("El email no es válido");
      }else if (err.response.status === 401){
        setErrMsg("La contraseña no es válida");
      }
      else{
        setErrMsg("El servidor no ha podido responder")
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="login-container">
      <div className="form-login">
        <h2 className="titulo__login">Inicio de sesión</h2>
        <p className="login_error" ref={errRef}>{errMsg}</p>
        <Formik
          validationSchema={validationSchema}
          initialValues={valoresIniciales}
          onSubmit={(valoresIniciales, formikHelpers) => {
            useAxios(valoresIniciales);
            //fetchinfo(valoresIniciales)
            console.log(valoresIniciales);
            formikHelpers.resetForm();
          }}
        >
          {({ errors, isValid, touched, dirty }) => (
            <Form sx={{}}>
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
                onFocus={() => setErrMsg("")}
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

              <h4>
                <Link className="login__subtext_cyan" to="/forgotPassword">
                  ¿Olvidaste tu contraseña?
                </Link>
              </h4>

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

              <h4 className="flex flex-jc-r">
                ¿Aún no tienes cuenta?&nbsp;
                <span>
                  <Link className="login__subtext_cyan" to="/signup">
                    Registrate
                  </Link>
                </span>
              </h4>
            </Form>
          )}
        </Formik>
        <div className="logo__login">
          <img src={Logo} />
          <label>IARA</label>
        </div>
      </div>
      <div className="imagen" id="imagen__login">
        <img src={Imagen} alt="Imagen" />
      </div>
    </div>
  );
};

export default LogIn;
