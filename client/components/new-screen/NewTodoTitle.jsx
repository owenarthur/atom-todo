import React from 'react';
import styled from 'styled-components';

const TitleFormDiv = styled.div`
  position: relative;
  width: 375px;
  height: 68px;
  left: 0px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);

  #title {
    position:absolute;
    left: 25px;
    height: 68px;
    width: 300px;
    background-color:rgba(0, 0, 0, 0);
    border: none;
    outline:none;

    font-family: Futura;
    font-style: normal;
    font-weight: 100;
    font-size: 16px;
    line-height: 68px;
    color: #FFFFFF;
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
  border-radius: 4px 0px 0px 4px;
  background: ${(props) => props.color};
`;

function NewTodoTitle({ titleChange, timing }) {
  let color;
  if (timing === '1') {
    color = '#FF6A6A';
  } else if (timing === '2') {
    color = '#FFD56A';
  } else if (timing === '3') {
    color = '#6A9DFF';
  } else {
    color = 'rgba(255, 255, 255, 0.5)';
  }

  const onChange = (e) => {
    titleChange(e.target.value);
  };

  return (
    <>
      <TitleFormDiv>
        <TitleFormColor color={color} />
        <input type="text" id="title" placeholder="type todo" onChange={onChange} />
      </TitleFormDiv>
    </>
  );
}

export default NewTodoTitle;
