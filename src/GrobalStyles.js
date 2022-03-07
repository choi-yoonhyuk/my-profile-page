import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@300;700&family=Nanum+Myeongjo&display=swap");


${reset}
h1,h2,h3,h4,h5,h6 {font-weight: 700; font-size:inherit;}
a {color:inherit; text-decoration: none;}
img {vertical-align: middle;}
a img {border: none;}
li {list-style: none;}
address, em, i {font-style: normal;}

body {font-family: 'Nanum Myeongjo', serif; font-size: 14px; color:#333;};
`;

export default GlobalStyles;
