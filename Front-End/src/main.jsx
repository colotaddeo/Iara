import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { LoginProvider } from "./Context";
import { AuthProvider } from "../src/context/AuthProvider";
import {UserInfoProvider} from '../src/context/UserInfoProvider';


ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>

    <BrowserRouter>

      {/* <UserInfoProvider> */}
        <AuthProvider>

          <App />

        </AuthProvider>
      {/* </UserInfoProvider>   */}

    </BrowserRouter>

  </React.StrictMode>
);
