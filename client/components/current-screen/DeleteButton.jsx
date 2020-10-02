import React from 'react';
import styled from 'styled-components';

const DeleteButtonDiv = styled.div`
  position: relative;
  width: 375px;
  height: 56px;
  left: 0px;
  cursor: pointer;

  background: rgba(255, 170, 170, 0.3);
`;

const DeleteButtonText = styled.div`
  text-align: center;
  height: 23px;

  font-family: Futura;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 56px;
  color: #FF6A6A;
`;

function DeleteButton({ onDelete }) {
  const onClick = () => {
    onDelete();
  };
  return (
    <DeleteButtonDiv onClick={onClick}>
      <DeleteButtonText>
        delete
      </DeleteButtonText>
    </DeleteButtonDiv>
  );
}

export default DeleteButton;
