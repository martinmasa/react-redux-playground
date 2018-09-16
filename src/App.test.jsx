import React from 'react';
import ReactDOM from 'react-dom';
import { IntlProvider } from 'react-intl';

import App from './App';

describe('<App />', () => {
  describe('render()', () => {
    it('renders without crashing', () => {
      const div = document.createElement('div');
      ReactDOM.render(
        <IntlProvider locale="en">
          <App />
        </IntlProvider>,
        div
      );
      ReactDOM.unmountComponentAtNode(div);
    });
  });
});
