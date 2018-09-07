import React from 'react';

const HelloWorld = ({ tech }) => {
  return (
    <div>
      <h1>Hello World {tech}</h1>
    </div>
  );
};


class HelloApp extends React.Component {
  state = {
    tech: 'React'
  }

  render() {
    const { tech } = this.state;

    return (
      <HelloWorld tech={tech} />
    );
  }
}

export default HelloApp;
