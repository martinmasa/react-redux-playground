import React from 'react';
import styled from 'styled-components';

import Toggle from './ToggleRP';

class Random extends React.Component {
  render() {
    return (
      <RandomContainer>
        <h1>Random</h1>

        <Toggle>
          {({ on, toggle }) => (
            <div>
              {on && <p>Toggle Content using children render props!</p>}
              <button type="button" onClick={toggle}>Toggle</button>
            </div>
          )}
        </Toggle>
      </RandomContainer>
    );
  }
}

export default Random;

const RandomContainer = styled.section`
  text-align: center;
  display: grid;
  grid-gap: 30px;
`;
