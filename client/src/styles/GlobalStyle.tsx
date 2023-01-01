import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  button {
    cursor: pointer;
  }

  * {
    font-family: 'Cafe24Ssurround_Air';
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  // 기본 태그들에 필요
  body {
    font-family: 'Cafe24Ssurround_Air';
  }

  h1 {
    font-family: 'Cafe24Ssurround';
  }

  button {
    font-family: 'Cafe24Ssurround';
  }

`;

export default GlobalStyle;
