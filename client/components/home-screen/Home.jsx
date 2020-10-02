/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

import Header from './Header.jsx';
import Section from './Section.jsx';

const TodoBody = styled.div`
  display: flex;
  flex-direction: column;
  top: 98px;
`;

function Home({ selectTodo, updateToken, token }) {
  const [allTodos, setAllTodos] = useState([]);
  let [nows, soons, laters] = [[], [], []];
  if (allTodos.length) {
    nows = allTodos.filter((t) => t.timing === 1);
    soons = allTodos.filter((t) => t.timing === 2);
    laters = allTodos.filter((t) => t.timing === 3);
  }

  const { user, getAccessTokenSilently } = useAuth0();
  const [loaded, setLoaded] = useState(false);
  const { email } = user;

  const getTodos = () => {
    const options = {
      method: 'GET',
      url: `http://localhost:5000/todos/${email}`,
      headers: { authorization: `Bearer ${token}` },
    };

    axios.request(options)
      .then((response) => setAllTodos(response.data))
      .catch(() => console.log('error'))
      .finally(() => {
        setLoaded(true);
      });
  };

  const buildTodo = (id) => {
    const selected = allTodos.filter(todo => todo._id === id)
    selectTodo(selected);
  };

  useEffect(() => {
    if (!loaded) {
      getAccessTokenSilently()
        .then((userToken) => {
          getTodos(userToken);
          updateToken(userToken);
        });
    }
  });

  return (
    <>
      <Header />
      <TodoBody>
        <Section title="NOW" color="#FF6A6A" todos={nows} selectTodo={buildTodo} />
        <Section title="SOON" color="#FFD56A" todos={soons} selectTodo={buildTodo} />
        <Section title="LATER" color="#6A9DFF" todos={laters} selectTodo={buildTodo} />
      </TodoBody>
    </>
  );
}

export default withAuthenticationRequired(Home);
