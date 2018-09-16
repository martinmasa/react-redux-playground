/* eslint react/jsx-filename-extension: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';
import registerServiceWorker from './registerServiceWorker';

import './base.style';
import App from './App';

ReactDOM.render(
  <IntlProvider locale="en">
    <App />
  </IntlProvider>, document.getElementById('root')
);
registerServiceWorker();
