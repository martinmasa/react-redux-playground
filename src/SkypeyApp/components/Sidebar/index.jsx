import React from 'react';
import styled from 'styled-components';

import User from '../User';

class Sidebar extends React.Component {
  render() {
    const { contacts } = this.props;

    return (
      <Aside>
        {contacts.map((contact) => <User key={contact.user_id} user={contact} />)}
      </Aside>
    );
  }
}

export default Sidebar;

const Aside = styled.aside`
  background-color: rgba(32, 32, 35, 1);
  border-right: 1px solid rgba(189, 189, 192, 0.1);
  transition: width 0.3s;
  overflow-y: scroll;
`;
