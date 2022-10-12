import { useState, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import LandingPage from "./components/pages/landingPage/landingPage";
import LogInPage from "./components/pages/logInPage/logIn";
import SignUp from "./components/signup/signUp";
import NotFound from "./components/pages/notFoundPage/NotFound";
import Home from "./components/pages/home/Home";
import loginContext from "./Context";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Layout from "./components/layout";

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
  // console.log(loginContext);
  // const { loggedIn } = useContext(loginContext)
  // console.log(loggedIn)

  return (
    <>
      <ThemeProvider theme={IaraTheme}>
        <Routes>
          {/*<Route path="/" element={<Layout />} >*/}
            <Route path="/" element={<LandingPage />} />
            <Route path="/logIn" element={<LogInPage />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="/Home" element={<Home />} />
            <Route path="*" element={<NotFound />} />
          {/*</Route>*/}

          {/* <Route path="/Home" element={loggedIn ? <Home /> : <Navigate to="/logIn"/>} /> */}
        </Routes>
      </ThemeProvider>
    </>
  );
}

export default App;
