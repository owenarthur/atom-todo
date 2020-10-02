import React, { Component } from 'react';
import styled from 'styled-components';
import { Router, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';

import history from './utils/history';
import SignIn from './components/sign-in-screen/SignIn.jsx';
import Home from './components/home-screen/Home.jsx';
import NewTodo from './components/new-screen/NewTodo.jsx';
import CurrentTodo from './components/current-screen/CurrentTodo.jsx';

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

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: {},
    }
    this.selectTodo = this.selectTodo.bind(this);
  }

  selectTodo( current ) {
    // this.setState({ current });
    console.log(current);
  }

  render() {
    const { current } = this.state;
    return (
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
                <Home selectTodo={this.selectTodo} />
              </Route>
              <Route path="/new">
                <NewTodo />
              </Route>
              <Route path="/current">
                <CurrentTodo current={current}/>
              </Route>
            </AnimatedSwitch>
          </Container>
        </Backdrop>
      </Router>
    )
  };
}

export default App;