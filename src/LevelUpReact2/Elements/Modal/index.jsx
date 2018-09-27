import React from 'react';
import styled from 'styled-components';

import { Portal } from '../../Utilities';
import { Card } from '../Card';
import Icon from '../Icon';

// React portal demo
class Modal extends React.Component {
  constructor() {
    super();
    this.el = document.createElement('div');
  }

  render() {
    const { children, on, toggle } = this.props;
    return (
      <Portal>
        {on && (
          <ModalWrapper>
            <ModalCard>
              <CloseButton type="button" onClick={toggle}>
                <Icon name="close" color="grey" />
              </CloseButton>
              <div>{children}</div>
            </ModalCard>
            <Overlay />
          </ModalWrapper>
        )}
      </Portal>
    );
  }
}

export default Modal;

const ModalWrapper = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  justify-items: center;
  align-items: center;
`;

const ModalCard = styled(Card)`
  position: relative;
  z-index: 10;
  margin-bottom: 200px;
  min-width: 320px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  border: none;
  background: transparent;
  padding: 10px;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: black;
  opacity: 0.5;
`;
