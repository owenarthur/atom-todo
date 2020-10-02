import React from 'react';
import styled from 'styled-components';

import Title from './Title.jsx';
import Content from './Content.jsx';

const MidSpacer = styled.div`
  height: 6px;
`;

const EndSpacer = styled.div`
  height: 36px;
`;

function Section({ title, color, todos }) {
  const contents = todos.map((todo, index) => (
    <div key={todo._id}>
      <Content
        color={color}
        title={todo.title}
        status={todo.status}
      />
      <MidSpacer />
    </div>
  ));
  return (
    <>
      <Title title={title} color={color} />
      <MidSpacer />
      {contents}
      <EndSpacer />
    </>
  );
}

export default Section;
