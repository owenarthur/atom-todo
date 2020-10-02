import React from 'react';
import styled from 'styled-components';

const TitleFormDiv = styled.div`
  position: relative;
  width: 375px;
  height: 68px;
  left: 0px;
  background: rgba(255, 255, 255, 0.1);

  #title {
    position:absolute;
    left: 25px;
    height: 68px;
    width: 300px;
    background-color:rgba(0, 0, 0, 0);
    color:white;
    border: none;
    outline:none;
  }
  #title:not(:focus) {
    border: none;
  }
  #title:focus {
    border: none;
  }
  `;

const TitleFormColor = styled.div`
  position: absolute;
  width: 17px;
  height: 68px;
  left: 0px;
  background: rgba(255, 255, 255, 0.5);
`;

function NewTodoTitle() {
  return (
    <>
      <TitleFormDiv>
        <TitleFormColor />
        <input type="text" id="title" placeholder="type todo" />
      </TitleFormDiv>
    </>
  );
}

export default NewTodoTitle;
