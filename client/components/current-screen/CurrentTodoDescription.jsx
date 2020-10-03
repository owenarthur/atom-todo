import React from 'react';
import styled from 'styled-components';

const DescriptionFormDiv = styled.div`
  position: relative;
  width: 375px;
  height: 136px;
  left: 0px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1);
`;

const DescriptionFormColor = styled.div`
  position: absolute;
  width: 17px;
  height: 136px;
  left: 0px;
  border-radius: 4px 0px 0px 4px;
  background: ${(props) => props.color};
`;

const DescriptionFormText = styled.div`
  position: absolute;
  height: 23px;
  left: 30px;

  font-family: Futura;
  font-style: light;
  font-weight: 100;
  font-size: 14px;
  line-height: 68px;
  color: #FFFFFF;
`;

function CurrentTodoDescription({description, timing}) {
  const color = timing === 1 ? '#FF6A6A' : (timing === 2 ? '#FFD56A' : '#6A9DFF');
  return (
    <>
      <DescriptionFormDiv>
        <DescriptionFormColor color={color} />
        <DescriptionFormText>
          {description}
        </DescriptionFormText>
      </DescriptionFormDiv>
    </>
  );
}

export default CurrentTodoDescription;
