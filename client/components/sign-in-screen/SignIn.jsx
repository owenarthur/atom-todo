import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Splash from '../../assets/splash.svg';

const Graphic = styled.div`
  position: absolute;
  height: 96px;
  left: 139.5px;
  top: 126.5px;
`;

const WelcomeText = styled.div`
  position: absolute;
  width: 375px;
  top: 262px;

  font-family: Futura;
  font-style: normal;
  font-weight: 900;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
  letter-spacing: 0.2em;
  color: #FFFFFF;
`;

const EnterButton = styled.div`
  position: absolute;
  width: 375px;
  height: 56px;
  left: 0px;
  top: 417px;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;

  font-family: Futura;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 56px;
  text-align: center;
  color: #FFFFFF;
`;

function SignIn() {
  return (
    <>
      <Graphic>
        <Splash />
      </Graphic>
      <WelcomeText>
        WELCOME TO LIST.
      </WelcomeText>
      <NavLink to="/home">
        <EnterButton>
          click to enter
        </EnterButton>
      </NavLink>
    </>
  );
}

export default SignIn;
