/* eslint no-unused-expressions: 0 */
import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  html,
  body {
    box-sizing: border-box;
    height: 100%;
    width: 100%;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }

   body {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  #root {
    min-height: 100vh;
  }
`;
