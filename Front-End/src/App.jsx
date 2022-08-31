import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header.jsx";
import Body from "./components/body/Body.jsx";
import NotFound from "./components/notFound/NotFound.jsx";
import NavBar from "./components/navBar/navBar.jsx";


function App() {
  return (
    <>
      {/* <NavBar /> */}
      <Routes>

        <Route path="/" element={<Header />} />
        <Route path="/Body" element={<Body />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
