/* eslint no-unused-expressions: 0 */
import { injectGlobal } from 'styled-components';

export default injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
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
