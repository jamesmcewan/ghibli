import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
html, body {
  padding: 0;
  margin: 0;
}
body {
  background: #109CEB;
  color: #fff;
  font-size: 10px;
  line-height: 1.3;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
}
`;

export default GlobalStyle;