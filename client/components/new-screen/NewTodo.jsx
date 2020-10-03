/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Header from './Header.jsx';
import NewTodoTitle from './NewTodoTitle.jsx';
import NewTodoDescription from './NewTodoDescription.jsx';
import TimingSelector from './TimingSelector.jsx';
import PublishButton from './PublishButton.jsx';

const TodoBody = styled.div`
  display: flex;
  flex-direction: column;
  top: 98px;
`;

const MidSpacer = styled.div`
  height: 6px;
`;

function NewTodo({ token }) {
  const { user } = useAuth0();
  const { email } = user;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [timing, setTiming] = useState('');
  const status = 1;

  const postTodo = () => {
    const todo = {
      user: email,
      title,
      description,
      timing,
      status,
    };
    const options = {
      method: 'POST',
      url: `http://ec2-18-222-120-26.us-east-2.compute.amazonaws.com:5000/todos/${email}`,
      headers: { authorization: `Bearer ${token}` },
      data: todo,
    };
    axios.request(options)
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
  };

  const titleChange = (text) => {
    setTitle(text);
  };

  const descriptionChange = (text) => {
    setDescription(text);
  };

  const timingChange = (num) => {
    setTiming(num);
  };

  const onSubmit = () => {
    postTodo();
  };

  return (
    <>
      <Header />
      <TodoBody>
        <NewTodoTitle titleChange={titleChange} timing={timing} />
        <MidSpacer />
        <NewTodoDescription descriptionChange={descriptionChange} />
        <MidSpacer />
        <TimingSelector
          timing="NOW"
          num="1"
          color="rgba(255, 106, 106, 0.5)"
          timingChange={timingChange}
        />
        <MidSpacer />
        <TimingSelector
          timing="SOON"
          num="2"
          color="rgba(255, 213, 106, 0.5)"
          timingChange={timingChange}
        />
        <MidSpacer />
        <TimingSelector
          timing="LATER"
          num="3"
          color="rgba(106, 157, 255, 0.5)"
          timingChange={timingChange}
        />
        <MidSpacer />
        <NavLink to="/home" style={{ textDecoration: 'none' }}>
          <PublishButton onSubmit={onSubmit} />
        </NavLink>
      </TodoBody>
    </>
  );
}

export default NewTodo;
