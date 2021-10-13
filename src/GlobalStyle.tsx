import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin:0;
  padding: 0;
}

button {
  cursor: pointer;
  background: none;
  border: none;
}
`;

export default GlobalStyle;
