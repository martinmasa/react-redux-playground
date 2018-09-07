import React, { Component } from 'react';
import styled from 'styled-components';

import HelloApp from './HelloApp';

const AppWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 20px;
  color: #2c3e50;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <h1>React Redux Playground</h1>
        <HelloApp />
      </AppWrapper>
    );
  }
}

export default App;
