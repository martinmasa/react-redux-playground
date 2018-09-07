import React from 'react';
import { createStore } from 'redux';
import styled from 'styled-components';

import reducer, { SET_TECHNOLOGY } from './reducer';

const techList = [
  { key: 'javascript', value: 'JavaScript' },
  { key: 'react', value: 'React' },
  { key: 'redux', value: 'Redux' }
];

const HelloWorld = ({ tech }) => {
  return (
    <Hello>
      Hello World <Tech>{tech}!</Tech>
    </Hello>
  );
};

class HelloApp extends React.Component {
  constructor(props) {
    super(props);

    this.store = createStore(reducer);
    this.setTechnology = this.setTechnology.bind(this);
  }

  componentDidMount() {
    this.store.subscribe(this.forceUpdate.bind(this));
  }

  setTechnology(newTech) {
    this.store.dispatch({
      type: SET_TECHNOLOGY,
      tech: newTech
    });
  }

  render() {
    return (
      <div>
        <HelloWorld tech={this.store.getState().tech} />
        {techList.map(({ key, value }) => (
          <Button
            key={key}
            onClick={() => this.setTechnology(value)}
          >
            {value}
          </Button>
        ))}
      </div>
    );
  }
}

export default HelloApp;

const Hello = styled.div`
  color: #2c3e50;
  font-size: 3em;
  position: relative;

  &:after {
    position: absolute;
    z-index: -1;
    content: "";
    bottom: -10%;
    left: 0;
    height: 40%;
    width: 100%;
    background: #f0898b;
  }
`;

const Tech = styled.span`
  font-weight: 700;
  font-style: italic;
`;

const Button = styled.button`
  outline: 0;
  background: #6059FF;
  color: #fff;
  font-size: 1rem;
  padding: 1rem;
  margin: 1rem;
  border: 0;
  box-shadow: none;
  font-weight: 400;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    opacity: 0.95;
  }
`;
