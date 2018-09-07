import React from 'react';
import { createStore } from 'redux';

import reducer from './reducer';

const HelloWorld = ({ tech }) => {
  return (
    <div>
      <h1>Hello World {tech}</h1>
    </div>
  );
};

class HelloApp extends React.Component {
  constructor(props) {
    super(props);

    this.store = createStore(reducer);
  }

  render() {
    return (
      <HelloWorld tech={this.store.getState().tech} />
    );
  }
}

export default HelloApp;
