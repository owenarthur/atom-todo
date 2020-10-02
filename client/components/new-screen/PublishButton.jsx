import React from 'react';
import styled from 'styled-components';

const PublishButtonDiv = styled.div`
  position: relative;
  width: 375px;
  height: 56px;
  left: 0px;
  cursor: pointer;

  background: rgba(216, 255, 198, 0.3)
`;

const PublishButtonText = styled.div`
  text-align: center;
  height: 23px;

  font-family: Futura;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 56px;

  color: #ADFF87;
`;

function PublishButton({ onSubmit }) {
  const onClick = () => {
    onSubmit();
  };
  return (
    <PublishButtonDiv onClick={onClick}>
      <PublishButtonText>
        publish to my list
      </PublishButtonText>
    </PublishButtonDiv>
  );
}

export default PublishButton;
