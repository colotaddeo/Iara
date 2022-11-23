import { useState, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import LandingPage from "./components/pages/landingPage/landingPage";
import LogInPage from "./components/pages/logInPage/logIn";
import SignUp from "./components/signup/signUp";
import NotFound from "./components/pages/notFoundPage/NotFound";
import Forgot_password from "./components/ForgotPassword";
import Home from "./components/pages/HomeTest/home";
import AddPatient from "./components/AddPatient";
import AddRadiography from "./components/AddRadiography";
import Settings from "./components/Settings";
import AllPatients from './components/AllPatients';
import RecentPacients from "./components/RecentPacients";
import loginContext from "./Context";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import UpdatePassword from "./components/updatePassword";

function App() {
  const IaraTheme = createTheme({
    palette: {
      mode: "dark",
      primary: {
        main: "#18FAEC",
      },
      secondary: {
        main: "#fff",
      },
    },
  });

  return (
    <>
      <ThemeProvider theme={IaraTheme}>
        <Routes>
          {/*<Route path="/" element={<Layout />} >*/}
          <Route path="/" element={<LandingPage />} />
          <Route path="/logIn" element={<LogInPage />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/forgotPassword" element={<Forgot_password />} />
          <Route path="/updatePassword/:id" element={<UpdatePassword />} />

          <Route path="/Home" element={<RecentPacients />} />
          <Route path="/AllPatients" element={<AllPatients />} />
          <Route path="/Settings" element={<Settings />} />
          <Route path="/AddRadiography/:id" element={<AddRadiography />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
