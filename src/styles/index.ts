import { createGlobalStyle } from "styled-components";

const theme = {
  primaryDark: "#1A1A1A",
  secondaryDark: "#595959",
  tertiaryDark: "#858585",
  gray: "#A3A3A3",
  mediumDark: " #73798C",
};

const GlobalStyle = createGlobalStyle`
/* Global styles */
*{
    margin:0;
    padding:0;
    box-sizing:border-box;
        font-family: "Manrope";

}

html {
  font-size: 62.5%;
}

body{

    font-size: 1.6rem;
}

/* utilities */
.f{
    display:flex;
}
.j-center{
justify-content:center;
}
.a-center{
    align-items:center
}
.j-between{
justify-content:space-between;
}
.j-around{
    justify-content:space-around;
}

.f-center{
    display:flex;
    align-items:center;
    justify-content:center;
}




.red{
    border:2px solid red;
}
`;

export default GlobalStyle;
export { theme };
