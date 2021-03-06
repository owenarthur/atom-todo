/* eslint-disable no-nested-ternary */
import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import NotStarted from '../../assets/not-started.svg';
import InProgress from '../../assets/in-progress.svg';
import Completed from '../../assets/completed.svg';

const ContentBar = styled.div`
  position: relative;
  width: 375px;
  height: 68px;
  left: 0px;
  border-radius: 4px;
  background: rgba(255, 255, 255, 0.1)
`;

const ContentBarColor = styled.div`
  position: absolute;
  width: 17px;
  height: 68px;
  left: 0px;
  border-radius: 4px 0px 0px 4px;
  background: ${(props) => props.color};
`;

const ContentBarText = styled.div`
  position: absolute;
  height: 23px;
  left: 30px;

  font-family: Futura;
  font-style: normal;
  font-weight: 200;
  font-size: 14px;
  line-height: 68px;
  color: #FFFFFF;
`;

const ContentBarStatus = styled.div`
  position: absolute;
  width: 23px;
  height: 23px;
  left: 333px;
  line-height: 80px;
`;

function Content({ color, title, status }) {
  const statSVG = status === 1 ? (<NotStarted />) : (status === 2 ? <InProgress /> : <Completed />);
  return (
    <NavLink to="/current">
      <ContentBar>
        <ContentBarColor color={color} />
        <ContentBarText>
          { title }
        </ContentBarText>
        <ContentBarStatus>
          { statSVG }
        </ContentBarStatus>
      </ContentBar>
    </NavLink>
  );
}

export default Content;
