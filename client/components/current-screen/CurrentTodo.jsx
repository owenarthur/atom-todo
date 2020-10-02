import React, { Component } from 'react';
import styled from 'styled-components';

import NotStarted from '../../assets/not-started.svg';
import InProgress from '../../assets/in-progress.svg';
import Completed from '../../assets/completed.svg';

import Header from './Header.jsx';
import CurrentTodoTitle from './CurrentTodoTitle.jsx';
import DeleteButton from './DeleteButton.jsx';

const TodoBody = styled.div`
  display: flex;
  flex-direction: column;
  top: 98px;
`;

const MidSpacer = styled.div`
  height: 6px;
`;

const ContentBar = styled.div`
  position: relative;
  width: 375px;
  height: 68px;
  left: 0px;
  background: rgba(255, 255, 255, 0.1)
`;

const ContentBarText = styled.div`
  position: absolute;
  height: 23px;
  left: 30px;

  font-family: Futura;
  font-style: normal;
  font-weight: 200;
  font-size: 12px;
  line-height: 68px;
  letter-spacing: 0.2em;
  color: #FFFFFF;
`;

const ContentBarStatus = styled.div`
  position: absolute;
  width: 23px;
  height: 23px;
  left: 333px;
  line-height: 80px;
`;

class NewTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Header />
        <TodoBody>
          <CurrentTodoTitle />
          <CurrentTodoTitle />
          <MidSpacer />
          <ContentBar>
            <ContentBarText>
              mark as not started
            </ContentBarText>
            <ContentBarStatus>
              <NotStarted />
            </ContentBarStatus>
          </ContentBar>
          <MidSpacer />
          <ContentBar>
            <ContentBarText>
              mark as in progress
            </ContentBarText>
            <ContentBarStatus>
              <InProgress />
            </ContentBarStatus>
          </ContentBar>
          <MidSpacer />
          <ContentBar>
            <ContentBarText>
              mark as completed
            </ContentBarText>
            <ContentBarStatus>
              <Completed />
            </ContentBarStatus>
          </ContentBar>
        </TodoBody>
        <MidSpacer />
        <DeleteButton />
      </>
    );
  }
}

export default NewTodo;
