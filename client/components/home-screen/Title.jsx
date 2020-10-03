/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const TitleBar = styled.div`
  position: relative;
  width: 375px;
  height: 34px;
  left: 0px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1)
`;

const TitleBarColor = styled.div`
  position: absolute;
  width: 17px;
  height: 34px;
  left: 0px;
  border-radius: 4px 0px 0px 4px;
  background: ${(props) => props.color};
`;

const TitleBarText = styled.div`
  position: absolute;
  width: 42px;
  height: 23px;
  left: 30px;

  @import url("https://use.typekit.net/gaa7tdr.css");
  font-family: Futura;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 34px;


  letter-spacing: 0.2em;

  color: #FFFFFF;
`;

function Title({ title, color }) {
  return (
    <TitleBar>
      <TitleBarColor color={color} />
      <TitleBarText>
        { title }
      </TitleBarText>
    </TitleBar>
  );
}

export default Title;
