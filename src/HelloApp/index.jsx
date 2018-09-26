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
      <span>
        Hello World <Tech>{tech}!</Tech>
      </span>
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
      <HelloContainer>
        <HelloWorld tech={this.store.getState().tech} />
        {techList.map(({ key, value }) => (
          <Button key={key} onClick={() => this.setTechnology(value)}>
            {value}
          </Button>
        ))}
      </HelloContainer>
    );
  }
}

export default HelloApp;

const HelloContainer = styled.main`
  display: grid;
  justify-items: center;
  grid-template-columns: repeat(3, 1fr);
  width: 600px;
  margin: 0 auto;
`;

const Hello = styled.div`
  color: #2c3e50;
  font-size: 3em;
  grid-column: 1 / -1;
  display: grid;
  grid-template-areas:
    '. . .'
    'bg bg bg';

  &:after {
    grid-area: bg;
    z-index: -1;
    content: '';
    height: 15px;
    background: #f0898b;
    margin-top: -20px;
  }
`;

const Tech = styled.span`
  font-weight: 700;
  font-style: italic;
`;

const Button = styled.button`
  outline: 0;
  background: #6059ff;
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

  &:focus {
    text-decoration: underline;
  }
`;
