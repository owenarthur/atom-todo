import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Carrot from '../../assets/carrot.svg';

const HeaderDiv = styled.div`
  height: 98px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderBack = styled.div`
  position: absolute;
  width: 14px;
  height: 11px;
  left: 25px;
  top: 55px;
`;

function Header() {
  return (
    <HeaderDiv>
      <NavLink to="/home">
        <HeaderBack>
          <Carrot />
        </HeaderBack>
      </NavLink>
    </HeaderDiv>
  );
}

export default Header;
