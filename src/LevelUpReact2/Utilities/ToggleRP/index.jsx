import React from 'react';

// Children render props demo
class Toggle extends React.Component {
  state = {
    on: false
  };

  toggle = () => {
    this.setState((prevState) => ({
      on: !prevState.on
    }));
  };

  render() {
    const { children } = this.props;
    const { on } = this.state;

    return children({
      on,
      toggle: this.toggle
    });
  }
}

export default Toggle;
