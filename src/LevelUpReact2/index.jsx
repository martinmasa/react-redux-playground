import React from 'react';
import styled from 'styled-components';

import { Modal } from 'LevelUpReact2/Elements';
import { Toggle } from 'LevelUpReact2/Utilities';
import { UserProvider } from './UserContext';
import User from './components/User';

class LevelUpReact2 extends React.Component {
  render() {
    return (
      <UserProvider>
        <LevelUpReact2Container>
          <h1>LevelUpReact2</h1>
          <User />
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
      </UserProvider>
    );
  }
}

export default LevelUpReact2;

const LevelUpReact2Container = styled.section`
  text-align: center;
  display: grid;
  grid-gap: 30px;
`;
