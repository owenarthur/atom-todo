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

function Home({ selectTodo, updateToken }) {
  const [allTodos, setAllTodos] = useState([]);
  let [nows, soons, laters] = [[],[],[]]
  if (allTodos.length) {
    nows = allTodos.filter(t => t.timing === 1)
    soons = allTodos.filter(t => t.timing === 2)
    laters = allTodos.filter(t => t.timing === 3)
  }

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
        setLoaded(true);
      })
  };



  useEffect(() => {
    if (!loaded) {
      getAccessTokenSilently()
        .then(token => {
          getTodos(token)
          setToken(token)
          updateToken(token);
        })
    }
  });


  return (
    <>
      <Header />
      {/* <div onClick={postTodo}>help</div> */}
      <TodoBody>
        <Section title="NOW" color="#FF6A6A" todos={nows} selectTodo={selectTodo}/>
        <Section title="SOON" color="#FFD56A" todos={soons} selectTodo={selectTodo}/>
        <Section title="LATER" color="#6A9DFF" todos={laters} selectTodo={selectTodo}/>
      </TodoBody>
    </>
  );
}

export default withAuthenticationRequired(Home);