import React from 'react';
import { Provider } from 'react-redux';

import Skypey from './containers/Skypey';

import store from './store';

class SkypeyApp extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Skypey />
      </Provider>
    );
  }
}

export default SkypeyApp;
