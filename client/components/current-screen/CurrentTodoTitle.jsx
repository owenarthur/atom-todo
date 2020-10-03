import React from 'react';
import styled from 'styled-components';

const TitleFormDiv = styled.div`
  position: relative;
  width: 375px;
  height: 68px;
  left: 0px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
`;

const TitleFormColor = styled.div`
  position: absolute;
  width: 17px;
  height: 68px;
  left: 0px;
  border-radius: 4px 0px 0px 4px;
  background: ${(props) => props.color};
`;

const TitleBarText = styled.div`
  position: absolute;
  height: 23px;
  left: 30px;

  font-family: Futura;
  font-style: normal;
  font-weight: 100;
  font-size: 16px;
  line-height: 68px;
  color: #FFFFFF;
`;

function CurrentTodoTitle({title, timing}) {
  const color = timing === 1 ? '#FF6A6A' : (timing === 2 ? '#FFD56A' : '#6A9DFF');
  return (
    <>
      <TitleFormDiv>
        <TitleFormColor color={color} />
        <TitleBarText>
          {title}
        </TitleBarText>
      </TitleFormDiv>
    </>
  );
}

export default CurrentTodoTitle;
