import React from 'react';
import styled from 'styled-components';

const DetailFormDiv = styled.div`
  position: relative;
  width: 375px;
  height: 136px;
  left: 0px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);

  #detail {
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
  #detail:not(:focus) {
    border: none;
  }
  #detail:focus {
    border: none;
  }
  `;

function NewTodoDetail({ descriptionChange }) {
  const onChange = (e) => {
    descriptionChange(e.target.value);
  };

  return (
    <DetailFormDiv>
      <input type="text" id="detail" placeholder="any details?" onChange={onChange} />
    </DetailFormDiv>
  );
}

export default NewTodoDetail;
