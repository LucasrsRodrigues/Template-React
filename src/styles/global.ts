import { createGlobalStyle } from 'styled-components';

// font-family: 'Poppins', sans-serif;
// font-family: 'Roboto', sans-serif;

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  body {
    background: #fff;
    color: #333333;
    -webkit-font-smoothing: antialiased;

  }
  body, #root {
    width: 100vw;
    height: 100vh;
  }

  body, input, button {
    font-family: 'Poppins', monospace;

  }

  button {
    cursor: pointer;
  }
`;
