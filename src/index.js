/* eslint react/jsx-filename-extension: "off" */
import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider, addLocaleData } from 'react-intl';
import locale_en from 'react-intl/locale-data/en';
import locale_es from 'react-intl/locale-data/es';
import messages_en from './translations/en.json';
import messages_es from './translations/es.json';
import registerServiceWorker from './registerServiceWorker';

import './base.style';
import App from './App';

addLocaleData([...locale_en, ...locale_es]);

const messages = {
  en: messages_en,
  es: messages_es
};

const language = navigator.language.split(/[-_]/)[0];

ReactDOM.render(
  <IntlProvider locale={language} messages={messages[language]}>
    <App />
  </IntlProvider>, document.getElementById('root')
);
registerServiceWorker();
