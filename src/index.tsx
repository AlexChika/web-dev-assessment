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
          <App isAuthenticated={true} />
        </BrowserRouter>
      </AuthProvider>
    </ApolloProvider>
  </React.StrictMode>
);
