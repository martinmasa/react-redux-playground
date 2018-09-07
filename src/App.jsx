import React, { Component } from 'react';
import {
  BrowserRouter,
  Redirect,
  Route,
  Switch
} from 'react-router-dom';
import styled from 'styled-components';

import HelloApp from './HelloApp';
import SkypeyApp from './SkypeyApp';

const routes = [
  {
    key: 'hello',
    path: '/hello',
    component: HelloApp
  },
  {
    key: 'skypey',
    path: '/skypey',
    component: SkypeyApp
  }
];

const AppWrapper = styled.div`
  display: grid;
  justify-items: center;
  grid-gap: 30px;
  color: #2c3e50;
`;

const AppsContainer = styled.div`
  display: grid;
  justify-items: center;
`;

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <AppWrapper>
          <h1>React Redux Playground</h1>
          <AppsContainer>
            <div>
              <Switch>
                {routes.map((route) => (
                  <Route
                    key={route.key}
                    path={route.path}
                    component={route.component}
                  />
                ))}
                <Redirect from="/" to="/hello" />
              </Switch>
            </div>

          </AppsContainer>
        </AppWrapper>
      </BrowserRouter>
    );
  }
}

export default App;
