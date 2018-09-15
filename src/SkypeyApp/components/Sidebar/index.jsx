import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import _ from 'lodash';

class Sidebar extends React.Component {
  render() {
    return (
      <Aside>
        Sidebar
      </Aside>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    contacts: _.values(state.contacts)
  };
};


const ConnectedSidebar = connect(mapStateToProps)(Sidebar);
export default ConnectedSidebar;

const Aside = styled.aside`
  background-color: rgba(32, 32, 35, 1);
  border-right: 1px solid rgba(189, 189, 192, 0.1);
  transition: width 0.3s;
`;
