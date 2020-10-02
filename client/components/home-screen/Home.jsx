import React from 'react';
import styled from 'styled-components';
import { useAuth0, withAuthenticationRequired } from '@auth0/auth0-react';

import Header from './Header.jsx';
import Section from './Section.jsx';

const TodoBody = styled.div`
  display: flex;
  flex-direction: column;
  top: 98px;
`;

function Home({ todos }) {
  const { user } = useAuth0();
  const { email } = user;
  return (
    <>
      <Header />
      <TodoBody>
        <Section title="NOW" color="#FF6A6A" todos={todos} />
        <Section title="SOON" color="#FFD56A" todos={todos} />
        <Section title="LATER" color="#6A9DFF" todos={todos} />
      </TodoBody>
    </>
  );
}

export default withAuthenticationRequired(Home);