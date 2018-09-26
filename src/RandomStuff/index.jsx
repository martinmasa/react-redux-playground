import React from 'react';
import styled, { injectGlobal } from 'styled-components';

import Toggle from './ToggleRP';
import Modal from './Modal';

injectGlobal([
  `
  #root {
    min-height: 100px;
  }
`
]);

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
                <Modal on={on} toggle={toggle}>
                  <h1>In a modal...</h1>
                </Modal>
              )}
              <button type="button" onClick={toggle}>
                Open
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
