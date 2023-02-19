import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.server";
import AuthProvider from "./Auth/Context";
import GlobalStyle from "./styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <GlobalStyle />
        <App isAuthenticated={true} />
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>
);
