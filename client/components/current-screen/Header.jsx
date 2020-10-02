import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const HeaderDiv = styled.div`
  height: 98px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderBack = styled.div`
  position: absolute;
  width: 60px;
  height: 23px;
  left: 25px;
  top: 50px;

  font-family: Futura;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;

  letter-spacing: 0.2em;

  color: #FFFFFF;
`;

function Header() {
  const carrot = '<';
  return (
    <HeaderDiv>
      <NavLink to="/home">
        <HeaderBack>
          {carrot}
        </HeaderBack>
      </NavLink>
    </HeaderDiv>
  );
}

export default Header;
