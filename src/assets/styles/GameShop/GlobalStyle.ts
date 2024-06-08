import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`
export default GlobalStyle;