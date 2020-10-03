import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { NavLink } from 'react-router-dom';

import NotStarted from '../../assets/not-started.svg';
import InProgress from '../../assets/in-progress.svg';
import Completed from '../../assets/completed.svg';

import Header from './Header.jsx';
import CurrentTodoTitle from './CurrentTodoTitle.jsx';
import CurrentTodoDescription from './CurrentTodoDescription.jsx';
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
  cursor: pointer;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1)
`;

const ContentBarText = styled.div`
  position: absolute;
  height: 23px;
  left: 180px;
  align-items: right;

  font-family: Futura;
  font-style: normal;
  font-weight: 100;
  font-size: 14px;
  line-height: 68px;
  color: #FFFFFF;
`;

const ContentBarStatus = styled.div`
  position: absolute;
  width: 23px;
  height: 23px;
  left: 333px;
  line-height: 80px;
`;

function CurrentTodo({current, token}) {
  const {title, description, status, user, timing, _id} = current;

  const deleteTodo = () => {
    const todo = current;
    const options = {
      method: 'DELETE',
      url: `http://ec2-18-222-120-26.us-east-2.compute.amazonaws.com:5000/todos/${user}/${_id}`,
      headers: { authorization: `Bearer ${token}` },
      data: todo,
    };
    axios.request(options)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  const updateStatus = (num) => {
    const todo = {
      user,
      title,
      description,
      timing,
      status: num,
      _id,
    };
    const options = {
      method: 'PUT',
      url: `http://ec2-18-222-120-26.us-east-2.compute.amazonaws.com:5000/todos/${user}/${_id}`,
      headers: { authorization: `Bearer ${token}` },
      data: todo,
    };
    axios.request(options)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  const markNotStarted = () => {
    updateStatus(1);
  };

  const markInProgress = () => {
    updateStatus(2);
  };

  const markCompleted = () => {
    updateStatus(3);
  };

  const onDelete = () => {
    deleteTodo();
  }

  return (
    <>
      <Header />
      <TodoBody>
        <CurrentTodoTitle title={title} timing={timing} />
        <MidSpacer />
        <CurrentTodoDescription description={description} timing={timing} />
        <MidSpacer />
        <NavLink to="/home" style={{ textDecoration: 'none' }}>
          <ContentBar onClick={markNotStarted}>
            <ContentBarText>
              mark as not started
            </ContentBarText>
            <ContentBarStatus>
              <NotStarted />
            </ContentBarStatus>
          </ContentBar>
        </NavLink>
        <MidSpacer />
        <NavLink to="/home" style={{ textDecoration: 'none' }}>
          <ContentBar onClick={markInProgress}>
            <ContentBarText>
              mark as in progress
            </ContentBarText>
            <ContentBarStatus>
              <InProgress />
            </ContentBarStatus>
          </ContentBar>
        </NavLink>
        <MidSpacer />
        <NavLink to="/home" style={{ textDecoration: 'none' }}>
          <ContentBar onClick={markCompleted}>
            <ContentBarText>
              mark as completed
            </ContentBarText>
            <ContentBarStatus>
              <Completed />
            </ContentBarStatus>
          </ContentBar>
        </NavLink>
      </TodoBody>
      <MidSpacer />
      <NavLink to="/home" style={{ textDecoration: 'none' }}>
        <DeleteButton onDelete={onDelete} />
      </NavLink>
    </>
  );
}

export default CurrentTodo;
