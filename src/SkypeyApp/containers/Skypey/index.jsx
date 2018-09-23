import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import _ from 'lodash';

import Main from '../../components/Main';
import Sidebar from '../../components/Sidebar';

class Skypey extends React.Component {
  render() {
    const { contacts } = this.props;

    return (
      <SkypeyContainer>
        <Sidebar contacts={_.values(contacts)} />
        <Main />
      </SkypeyContainer>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contacts
});

export default connect(mapStateToProps)(Skypey);

const SkypeyContainer = styled.div`
  display: grid;
  height: 100vh;
  color: rgba(189, 189, 192, 1);
  grid-template-columns: 80px 1fr;
  overflow: hidden;

  @media (min-width: 576px) {
    grid-template-columns: 320px 1fr;
  }
`;
