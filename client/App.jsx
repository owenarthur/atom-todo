import React from 'react';
import styled from 'styled-components';
import { Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import history from './utils/history';
import SignIn from './components/sign-in-screen/SignIn.jsx';
import Home from './components/home-screen/Home.jsx';

const Backdrop = styled.div`
  height: 100vh;
  width: 100vw;
  background: rgba(19, 71, 114, 0.71);
`;

const Container = styled.div`
  height: 812px;
  min-width: 375px;
  max-width: 375px;
  margin: 0 auto;
  background: #3F4448;

  .switch-wrapper {
    position: relative;
  }

  .switch-wrapper > div {
    position: absolute;
  }

  overflow: scroll;
  ::-webkit-scrollbar {
    width: 0px;
    background: transparent;
`;

const todos = [
  {
    _id: '5f7622242090efb966d1430c',
    userId: 1,
    user: 'owen',
    todoId: 1,
    title: 'double check',
    description: 'i extra need a job',
    status: 2,
    __v: 0,
  },
  {
    _id: '5f7622242090efb966d1430c',
    userId: 1,
    user: 'owen',
    todoId: 1,
    title: 'double check',
    description: 'i extra need a job',
    status: 1,
    __v: 0,
  },
  {
    _id: '5f7622242090efb966d1430c',
    userId: 1,
    user: 'owen',
    todoId: 1,
    title: 'double check',
    description: 'i extra need a job',
    status: 1,
    __v: 0,
  },
];

const App = () => (
  <Router history={ history }>
    <Backdrop>
      <Container>
        <AnimatedSwitch
          exact
          path="/"
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper"
          >
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/home">
            <Home todos={todos} />
          </Route>
        </AnimatedSwitch>
      </Container>
    </Backdrop>
  </Router>
);

export default App;