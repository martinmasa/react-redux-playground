import React, { Component } from 'react';
import styled from 'styled-components';

const AppWrapper = styled.div`
  color: slategray;
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <h1>Grano Admin</h1>
      </AppWrapper>
    );
  }
}

export default App;
