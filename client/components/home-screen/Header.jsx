import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Add from '../../assets/add.svg';
import Carrot from '../../assets/carrot.svg';

const HeaderDiv = styled.div`
  height: 98px;
  width: 100%;
  display: flex;
  justify-content: center;
`;

const HeaderText = styled.div`
  font-family: Futura;
  font-weight: 700;
  font-style: normal;
  font-size: 20px;
  line-height: 29px;
  letter-spacing: 0.2em;
  color: #FFFFFF;

  position: absolute;
  height: 29px;
  top: 48px;
`;

const AddButton = styled.div`
  position: absolute;
  width: 23px;
  height: 23px;
  left: 333px;
  top: 51px;

  color: #FFFFFF;

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
      <NavLink to="/">
        <HeaderBack>
          <Carrot />
        </HeaderBack>
      </NavLink>
      <HeaderText>
        MY LIST
      </HeaderText>
      <NavLink to="/new">
        <AddButton>
          <Add />
        </AddButton>
      </NavLink>
    </HeaderDiv>
  );
}

export default Header;
