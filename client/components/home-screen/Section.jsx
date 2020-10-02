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

function Section({ title, color, todos, selectTodo }) {

  const clickHandler = (e) => {
    selectTodo(e.currentTarget.getAttribute('data-id'));
  }

  const contents = todos.map((todo, index) => (
    <div key={todo._id} data-id={todo._id} onClick={clickHandler.bind(this)}>
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
