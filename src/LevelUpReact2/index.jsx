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

class LevelUpReact2 extends React.Component {
  render() {
    return (
      <LevelUpReact2Container>
        <h1>LevelUpReact2</h1>
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
      </LevelUpReact2Container>
    );
  }
}

export default LevelUpReact2;

const LevelUpReact2Container = styled.section`
  text-align: center;
  display: grid;
  grid-gap: 30px;
`;
