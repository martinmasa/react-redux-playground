import React from 'react';
import styled from 'styled-components';

class Sidebar extends React.Component {
  render() {
    return (
      <Aside>
        Sidebar
      </Aside>
    );
  }
}

export default Sidebar;

const Aside = styled.aside`
  background-color: rgba(32, 32, 35, 1);
  border-right: 1px solid rgba(189, 189, 192, 0.1);
  transition: width 0.3s;
`;
