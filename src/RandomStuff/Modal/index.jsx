import React from 'react';
import styled from 'styled-components';

import Portal from '../Portal';

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
            <button type="button" onClick={toggle}>
              Close
            </button>
            <div>{children}</div>
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
  background: teal;
`;
