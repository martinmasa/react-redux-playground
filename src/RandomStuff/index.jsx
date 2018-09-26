import React from 'react';
import styled from 'styled-components';

import Toggle from './ToggleRP';
import Portal from './Portal';
import Modal from './Modal';

class Random extends React.Component {
  render() {
    return (
      <RandomContainer>
        <h1>Random</h1>
        <Modal />
        <Toggle>
          {({ on, toggle }) => (
            <div>
              {on && (
                <React.Fragment>
                  <p>Toggle Content using children render props!</p>
                  <Portal>
                    <p>This content is in the portal!</p>
                  </Portal>
                </React.Fragment>
              )}
              <button type="button" onClick={toggle}>
                Toggle
              </button>
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
