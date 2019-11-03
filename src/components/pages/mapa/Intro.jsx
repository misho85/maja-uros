import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import back2 from '~src/assets/images/back2.jpg';
import Map from './Map';

const Wrapper = styled.section`
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

const Top = styled.div`
  height: 430px;
  background-image: linear-gradient(
      60deg,
      rgba(241, 241, 241, 0.9) 15%,
      rgba(243, 246, 248, 0) 100%
    ),
    url(${back2});
  background-position-y: bottom;
  background-size: cover;
  display: flex;
  ${p => p.theme.maxWidth.phone`
    background-position-x: right;
  `}
`;

const Title = styled.h1`
  text-align: center;
  margin: auto;
`;

const Content = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  padding-top: 100px;
  padding-bottom: 50px;
  ${p => p.theme.maxWidth.tablet`
    padding: 0 5%;
  `}
  ${p => p.theme.maxWidth.phone`
    padding-top: 90px;
    padding-bottom: 80px;
  `}
`;

const Box = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  box-shadow: 0 0 50px 0 rgba(130, 128, 128, 0.25);
  min-width: 60%;
  ${p => p.theme.maxWidth.tablet`
    margin: 0;
  `}
`;

const SafetyLine = styled.p`
  margin: 50px 0;
`;

const Confirm = styled(Link)`
  outline: none;
  box-shadow: none;
  background: rgba(85, 187, 192, 1);
  color: rgba(255, 255, 255, 1);
  font-size: 13px;
  letter-spacing: 2px;
  line-height: 20px;
  text-transform: uppercase;
  padding: 14px 30px;
  width: 300px;
  margin: auto;
  cursor: pointer;
  transition: all 0.3s ease;
  -webkit-appearance: none;
  /* border-radius: 0.5em; */
  resize: none;
  border: none;
  &:hover {
    background: rgba(69, 152, 156, 1);
  }
  &:disabled {
    cursor: not-allowed;
    &:hover {
      background: rgba(85, 187, 192, 1);
    }
  }
`;

const Mapa = () => (
  <Wrapper>
    <Top>
      <Title>Mapa</Title>
    </Top>
    <Content>
      <Box>
        <Map />
      </Box>
      <SafetyLine>
        Profesionalni vozači su organizovani da Vas I Vaše vozilo vrate bezbedno
        kući.
      </SafetyLine>
      <Confirm to="/potvrda">Potvrdite prisustvo</Confirm>
    </Content>
  </Wrapper>
);

export default Mapa;
