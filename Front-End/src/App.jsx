import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/pages/landingPage/landingPage";
import LogInPage from "./components/pages/logInPage/logIn";
import SignUpPage from "./components/pages/signUpPage/signUp";
import NotFound from "./components/pages/notFoundPage/NotFound";


function App() {
  return (
    <>
      {/* ¿como bloquear una página que es solo para registrados a un no-user? */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/logIn" element={<LogInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
