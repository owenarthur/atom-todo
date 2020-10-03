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
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background: rgba(19, 71, 114, 0.71);


  .leftPad {
    flex-grow: 4;
    flex-shrink: 4;
    flex-basis: 90%;
  }

  .center {
    flex: none;
    width: 375px;
    height: 812px;
  }

  .rightPad {
    flex-grow: 4;
    flex-shrink: 4;
    flex-basis: 90%;
  }
`;

const Container = styled.div`
  background: #3F4448;
  height: 100%;
  width: 100%;

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
      token: '',
    };
    this.selectTodo = this.selectTodo.bind(this);
    this.updateToken = this.updateToken.bind(this);
  }

  selectTodo(current) {
    this.setState({ current: current[0] });
  }

  updateToken(fetchedToken) {
    const { token } = this.state;
    if (!token) this.setState({ token: fetchedToken });
  }

  render() {
    const { current, token } = this.state;
    return (
      <Router history={history}>
        <Backdrop>
          <div className="leftPad" />
          <div className="center">
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
                  <Home selectTodo={this.selectTodo} updateToken={this.updateToken} token={token} />
                </Route>
                <Route path="/new">
                  <NewTodo token={token} />
                </Route>
                <Route path="/current">
                  <CurrentTodo current={current} token={token} />
                </Route>
              </AnimatedSwitch>
            </Container>
          </div>
          <div className="rightPad" />
        </Backdrop>
      </Router>
    );
  }
}

export default App;


// width: 100vw;
// // width: 375px;
// const Wrapper = styled.div`

//     .help {
//       height: 100vh;
//       width: 375px;
//       background-color: tan;
//     }
//     @media screen
//       and (max-device-width: 375px)
//       and (min-device-width: 0px)
//       {
//         .help {
//           background-color: blue;
//           width: 100vw;
//         }

// }

// `;