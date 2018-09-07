import React from 'react';
import { createStore } from 'redux';
import styled from 'styled-components';

import reducer from './reducer';

const Hello = styled.div`
  color: #2c3e50;
  font-size: 3em;
  position: relative;

  &:after {
    position: absolute;
    z-index: -1;
    content: "";
    bottom: -10%;
    left: 0;
    height: 40%;
    width: 100%;
    background: #f0898b;
  }
`;

const Tech = styled.span`
  font-weight: 700;
  font-style: italic;
`;

const HelloWorld = ({ tech }) => {
  return (
    <Hello>
      Hello World <Tech>{tech}!</Tech>
    </Hello>
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
