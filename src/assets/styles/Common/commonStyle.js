import { createGlobalStyle } from "styled-components"

export const ResetStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    box-shadow: none;
  }
`