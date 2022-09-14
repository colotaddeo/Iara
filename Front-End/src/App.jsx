import { useState, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/pages/landingPage/landingPage";
import LogInPage from "./components/pages/logInPage/logIn";
import SignUp from "./components/pages/signUp/signUp";
import NotFound from "./components/pages/notFoundPage/NotFound";
import Home from "./components/pages/home/Home";
import loginContext from "./Context";

function App() {

  // const { loggedIn } = useContext(loginContext)
  // console.log(loggedIn)

  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/logIn" element={<LogInPage />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/Home" element={<Home />} />
        
        <Route path="*" element={<NotFound />} />
        {/* <Route path="/Home" element={loggedIn ? <Home /> : <Navigate to="/logIn"/>} /> */}
      </Routes>
    </>
  );
}

export default App;
