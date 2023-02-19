// This Project utilizes Styled-components for styling and styledJs abstraction code structure

import { Routes, Route, Navigate } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import LoginPage from "./pages/Login.server";
import HomePage from "./pages/Home.server";
import { theme } from "./styles";
import { Auth } from "./Auth/Context";

// ....................app.........

function App() {
  const state = Auth();
  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route
          path="/"
          element={
            state?.isLoginValid ? (
              <HomePage />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        ></Route>
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
