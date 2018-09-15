/* eslint no-unused-expressions: 0 */
import { injectGlobal } from 'styled-components';

export default injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
  }

   body {
    font-family: 'Roboto', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100vh;
  }
`;
