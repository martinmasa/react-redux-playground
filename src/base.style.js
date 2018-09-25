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
  }

  #root {
    min-height: 100vh;
  }

  #portal {
    position: absolute;
    top: 10px;
    left: 10px;
    
    & > * {
      background: palegoldenrod;
      padding: 5px;
      border-radius: 2px;
    }
  }
`;
