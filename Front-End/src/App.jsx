import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/pages/landingPage/landingPage";
import LogInPage from "./components/pages/logInPage/logIn";
import SignUpPage from "./components/pages/signUpPage/signUp";
import NotFound from "./components/pages/notFoundPage/NotFound";
import Home from "./components/pages/home/Home";
import UserContext from "./context"

function App() {

const

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/logIn" element={<LogInPage />} />
        <Route path="/signUp" element={<SignUpPage />} />
        <Route path="/Home" element={<Home />} />
        
        <Route path="*" element={<NotFound />} />

      </Routes>
    </>
  );
}

export default App;
