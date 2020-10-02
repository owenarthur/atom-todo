import React, { Component } from 'react';
import styled from 'styled-components';

import Header from './Header.jsx';
import NewTodoTitle from './NewTodoTitle.jsx';
import NewTodoDetail from './NewTodoDetail.jsx';
import StatusSelector from './StatusSelector.jsx';
import PublishButton from './PublishButton.jsx';

const TodoBody = styled.div`
  display: flex;
  flex-direction: column;
  top: 98px;
`;

const MidSpacer = styled.div`
  height: 6px;
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
          <NewTodoTitle />
          <MidSpacer />
          <NewTodoDetail />
          <MidSpacer />
          <StatusSelector status="NOW" color="rgba(255, 106, 106, 0.5)" />
          <MidSpacer />
          <StatusSelector status="SOON" color="rgba(255, 213, 106, 0.5)" />
          <MidSpacer />
          <StatusSelector status="LATER" color="rgba(106, 157, 255, 0.5)" />
          <MidSpacer />
          <PublishButton />
        </TodoBody>
      </>
    );
  }
}

export default NewTodo;
