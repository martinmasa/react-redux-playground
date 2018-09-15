import React from 'react';
import styled from 'styled-components';

class Main extends React.Component {
  render() {
    return (
      <MainContainer>
        Main
      </MainContainer>
    );
  }
}

export default Main;

const MainContainer = styled.main`
  background-color: rgba(25, 25, 27, 1);
`;
