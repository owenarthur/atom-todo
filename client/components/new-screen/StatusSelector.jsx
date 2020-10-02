import React from 'react';
import styled from 'styled-components';

const StatusSelectorDiv = styled.div`
  position: relative;
  width: 375px;
  height: 56px;
  left: 0px;
  background: rgba(255, 255, 255, 0.1)
`;

const StatusSelectorText = styled.div`
  text-align: right;
  padding-right: 50px;
  font-family: Futura;
  font-style: normal;
  font-weight: 200;
  font-size: 12px;
  line-height: 56px;
  letter-spacing: 0.2em;
  color: #FFFFFF;
`;

const StatusSelecterIcon = styled.div`
  position: absolute;
  width: 24px;
  height: 24px;
  left: 333px;
  top: 25%;

  background: ${(props) => props.color};
  border: 1px solid ${(props) => props.color};
  box-sizing: border-box;
  border-radius: 3px;
`;

function StatusSelector({ status, color }) {
  const string = `mark as ${status}`
  return (
    <>
      <StatusSelectorDiv>
        <StatusSelectorText>
          { string }
        </StatusSelectorText>
        <StatusSelecterIcon color={color} />
      </StatusSelectorDiv>
    </>
  );
}

export default StatusSelector;
