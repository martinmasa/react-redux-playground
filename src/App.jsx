import React, { Component } from 'react';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import styled from 'styled-components';

import GlobalStyle from './base.style';

import HelloApp from './HelloApp';
import SkypeyApp from './SkypeyApp';
import LevelUpReact2 from './LevelUpReact2';

const routes = [
  {
    key: 'hello',
    path: '/hello',
    component: HelloApp
  },
  {
    key: 'LUT-React2',
    path: '/levelup-react2',
    component: LevelUpReact2
  },
  {
    key: 'skypey',
    path: '/skypey',
    component: SkypeyApp
  }
];

const Home = () => {
  return (
    <HomeContainer>
      <GlobalStyle />
      <H1>
        <FormattedMessage
          id="home.header"
          defaultMessage="{tech} Playground!"
          values={{ tech: 'React Redux' }}
        />
      </H1>
      {routes.map((route) => (
        <AppLink key={route.key} to={route.path}>
          {route.key}
        </AppLink>
      ))}
    </HomeContainer>
  );
};

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <Switch>
            <Route exact path="/" component={Home} />
            {routes.map((route) => (
              <Route key={route.key} path={route.path} component={route.component} />
            ))}
            {/* <Redirect from="/" to="/skypey" /> */}
          </Switch>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;

const HomeContainer = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 10px 0;
  width: 750px;
  margin: 20px auto;
  justify-items: center;
  color: #2c3e50;
`;

const H1 = styled.h1`
  grid-column: 1 / -1;
`;

const AppLink = styled(Link)`
  background: #6059ff;
  padding: 20px;
  color: white;
  font-weight: bold;
  text-decoration: none;
  border-radius: 5px;
  text-transform: capitalize;

  &:hover {
    opacity: 0.9;
  }
`;
