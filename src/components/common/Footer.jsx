import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Wrapper = styled.section`
  padding: 50px 0 55px;
  text-align: center;
  background-color: #fafafa;
  display: flex;
  ${p => p.theme.maxWidth.xLarge`
    font-size: 90%;
    height: fit-content;
  `}
  ${p => p.theme.maxWidth.wide`
    font-size: 80%;
  `}
  ${p => p.theme.maxWidth.desktop`
    font-size: 75%;
  `}
`;

const Content = styled.div`
  margin: auto;
  display: flex;
  flex-direction: row;
  a {
    color: #5a5a5a;
  }
  ${p => p.theme.maxWidth.tablet`
    padding: 0 5%;
  `}
`;

const Haert = styled.small`
  margin: 0 5px;
`;

const Footer = () => (
  <Wrapper>
    <Content>
      <Link to="/">Maja & Uros </Link>
      <Haert>&#10084;</Haert>
      <Link to="/"> nazad na pozivnicu</Link>
    </Content>
  </Wrapper>
);

export default Footer;
