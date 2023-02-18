// This Project utilizes Styled-components for styling and styledJs abstraction code structure

import { ThemeProvider } from "styled-components";
import LoginPage from "./pages/Login";
import GlobalStyle, { theme } from "./styles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <LoginPage />
    </ThemeProvider>
  );
}

export default App;
