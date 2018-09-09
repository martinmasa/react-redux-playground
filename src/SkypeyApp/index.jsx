import React from 'react';
import styled from 'styled-components';

import Main from './Main';
import Sidebar from './Sidebar';

class SkypeyApp extends React.Component {
  render() {
    return (
      <SkypeyContainer>
        <Sidebar />
        <Main />
      </SkypeyContainer>
    );
  }
}

export default SkypeyApp;

const SkypeyContainer = styled.div`
  display: grid;
  height: 100vh;
  color: rgba(189, 189, 192, 1);
  grid-template-columns: 80px 1fr;

  @media (min-width: 576px) {
    grid-template-columns: 320px 1fr;
  }
`;
