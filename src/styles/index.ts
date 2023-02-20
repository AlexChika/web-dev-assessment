import { createGlobalStyle } from "styled-components";

// few colors are not here beacuse they were used scantly
const theme: ThemeType = {
  primaryDark: "#1A1A1A",
  secondaryDark: "#595959",
  tertiaryDark: "#858585",

  gray: "#A3A3A3",
  secondaryGray: "#A3A3A3",
  primaryGray: "#F7F7F7",
  tertiaryGray: "#F5F5F5",

  mediumDark: " #73798C",
  primaryGreen: "#1cc578",
  primaryRed: "#e60a2b",
  secondaryRed: "#FEE7EA",
  tertiaryRed: "#feebee",
};

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
    font-family: "Manrope";
    font-weight:400;
    -webkit-tap-highlight-color: transparent;
}

html {
  font-size: 62.5%;
}

body{
font-size: 1.6rem;
}
`;

export default GlobalStyle;
export { theme };
