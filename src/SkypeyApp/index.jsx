import React from 'react';

class SkypeyApp extends React.Component {
  state = {
    title: 'Skypey'
  };

  render() {
    const { title } = this.state;

    return (
      <div>
        <h1>{title}</h1>
      </div>
    );
  }
}

export default SkypeyApp;
