/* ------------- WEB DEV TEST ------------ */
/*
(1) Two UI components found at / and /login
    Trace Components to page/home and page/login

(2) Integrate Graph Api link. Graph query is made
    at Content.tsx. Trace component to /components/home/content.tsx

(3) Login Screen with dummy user name component found    at /components/login/loginForm.tsx

(4) Security Login! both security login and login details are stored on the Auth/context file


// this project uses styled components to make html easily inspectable. Tailwindcss would have been my preffered option
*/

import React from "react";
import ReactDOM from "react-dom/client";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.server";
import AuthProvider from "./Auth/Context";
import GlobalStyle from "./styles";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const client = new ApolloClient({
  uri: "https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <AuthProvider>
        <BrowserRouter>
          <GlobalStyle />
          <App />
        </BrowserRouter>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>
);
