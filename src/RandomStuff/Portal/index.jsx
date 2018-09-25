import React from 'react';
import ReactDOM from 'react-dom';

const modalRoot = document.getElementById('portal');

// React portal demo
class Portal extends React.Component {
  constructor() {
    super();
    this.el = document.createElement('div');
  }

  componentDidMount = () => {
    modalRoot.appendChild(this.el);
  }

  componentWillUnmount = () => {
    modalRoot.removeChild(this.el);
  }

  render() {
    const { children } = this.props;
    return ReactDOM.createPortal(children, this.el);
  }
}

export default Portal;
