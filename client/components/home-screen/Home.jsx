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

function Home() {
  const [allTodos, setAllTodos] = useState([]);
  // const [selected, selectTodo] = useState({})



  const { user, isAuthenticated, getAccessTokenSilently } = useAuth0();
  const [token, setToken] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const { email } = user;

  const getTodos = (token, email) => {
    const options = {
      method: 'GET',
      url: `http://localhost:5000/todos/${email}`,
      headers: {authorization: `Bearer ${token}`}
    };

    axios.request(options)
      .then((response) => setAllTodos(response.data))
      .catch((error) => console.error(error))
      .finally(() => {
        console.log(allTodos)
        setLoaded(true);
      })
  }

  const postTodo = () => {
    if(loaded) {
    const todo = {
      user: "owenarthurdesign@gmail.com",
      todoId: 1,
      title: "first from react",
      description: "i extra need a job",
      status: 1,
      timing: 2,
    }

    const options = {
      method: 'POST',
      url: 'http://localhost:5000/todos/${email}',
      headers: { authorization: `Bearer ${token}` },
      data: todo
    };
    axios.request(options)
      .then((response) => setAllTodos(response.data))
      .catch((error) => console.error(error))
      .finally(() => {
        console.log(allTodos)
        setLoaded(false);
      })
  }
  }

  useEffect(() => {
    if (!loaded) {
      getAccessTokenSilently()
        .then(token => {
          getTodos(token)
          setToken(token);
        })
    }
  });


  return (
    <>
      <Header />
      <div onClick={postTodo}>help</div>
      <TodoBody>
        <Section title="NOW" color="#FF6A6A" todos={allTodos} />
        <Section title="SOON" color="#FFD56A" todos={allTodos} />
        <Section title="LATER" color="#6A9DFF" todos={allTodos} />
      </TodoBody>
    </>
  );
}

export default withAuthenticationRequired(Home);