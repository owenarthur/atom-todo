import React from 'react';
import styled from 'styled-components';

const TimingSelectorDiv = styled.div`
  position: relative;
  width: 375px;
  height: 56px;
  left: 0px;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1)
`;

const TimingSelectorText = styled.div`
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

const TimingSelecterIcon = styled.div`
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

function TimingSelector({
  timing, num, color, timingChange,
}) {
  const string = `mark as ${timing}`;

  const onClick = () => {
    timingChange(num);
  };

  return (
    <>
      <TimingSelectorDiv onClick={onClick}>
        <TimingSelectorText>
          { string }
        </TimingSelectorText>
        <TimingSelecterIcon color={color} />
      </TimingSelectorDiv>
    </>
  );
}

export default TimingSelector;
