import React from 'react';
import styled from 'styled-components';

const TitleFormDiv = styled.div`
  position: relative;
  width: 375px;
  height: 68px;
  left: 0px;
  background: rgba(255, 255, 255, 0.1);
`;

const TitleFormColor = styled.div`
  position: absolute;
  width: 17px;
  height: 68px;
  left: 0px;
  background: #FF6A6A;
`;

const TitleBarText = styled.div`
  position: absolute;
  height: 23px;
  left: 30px;

  font-family: Futura;
  font-style: normal;
  font-weight: 200;
  font-size: 12px;
  line-height: 68px;
  letter-spacing: 0.2em;
  color: #FFFFFF;
`;

function CurrentTodoTitle({title}) {
  return (
    <>
      <TitleFormDiv>
        <TitleFormColor />
        <TitleBarText>
          {title}
        </TitleBarText>
      </TitleFormDiv>
    </>
  );
}

export default CurrentTodoTitle;
