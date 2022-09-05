import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/pages/homePage/header/Header.jsx";
import Body from "./components/pages/homePage/body/Body.jsx";
import NotFound from "./components/pages/notFoundPage/NotFound.jsx";
import NavBar from "./components/pages/homePage/navBar/navBar.jsx";
import HomePage from "./components/pages/homePage/homePage";

function App() {
  return (
    <>
      <HomePage />
      {/* <NavBar />
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/Body" element={<Body />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
    </>
  );
}

export default App;
