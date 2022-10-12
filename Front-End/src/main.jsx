import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./Context";
import { AuthProvider } from "../src/context/AuthProvider";
import {UseInfoProvider} from '../src/context/UserInfoProvider';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <BrowserRouter>

      <UseInfoProvider>
        <AuthProvider>

          <App />

        </AuthProvider>
      </UseInfoProvider>  

    </BrowserRouter>

  </React.StrictMode>
);
