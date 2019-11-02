import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import back from '~src/assets/images/back.jpg';

const Wrapper = styled.section`
  background: url(${back}) no-repeat center;
  background-size: 100% 100%;
  /* background-size: cover; */
  align-items: center;
  display: flex;
  height: 100vh;
  ${p => p.theme.maxWidth.xLarge`
    font-size: 90%;
  `}
  ${p => p.theme.maxWidth.wide`
    font-size: 80%;
  `}
  ${p => p.theme.maxWidth.tablet`
    background-size: cover;
  `}
  z-index: -1;
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  margin: auto;
  text-align: center;
  ${p => p.theme.maxWidth.tablet`
    margin-top: 50px;
  `}
  z-index: 1;
`;

const Details = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: white;
    font-size: 20px;
    line-height: 1.5;
  }
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

const Citat = styled.p`
  margin-bottom: 50px;
`;

const Invitation = styled.p``;

const Title = styled.h1`
  margin: 1em 0;
`;

const Text = styled.p`
  margin-bottom: 1em;
`;

const Respect = styled.p`
  margin: 3em 0;
`;

const MapLink = styled(Link)`
  text-decoration: underline;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0.2;
  background-color: #000;
`;

const Hero = () => (
  <Wrapper>
    <Overlay />
    <Container>
      <Details>
        <Citat>
          „You don’t marry someone you can live with – you marry the person you
          cannot live without.“
        </Citat>
        <Invitation>
          Pozivamo Vas da uveličate ceremoniju našeg venčanja 19. oktobra 2019.
          godine.
        </Invitation>
        <Title>Maja Mihajlov i Uros Plecić</Title>
        <Text>
          Proslava i građansko venčanje će se održati u restoranu “Akacia Open
          Concept”
          <br />
          Okupljanje gostiju od 14h na adresi Kragujevački put 82a
          <br />
          Građansko venčanje u 15h
        </Text>
        <MapLink to="/mapa">pogledaj mapu</MapLink>
        <Respect>S poštovanjem, porodice Albunović i Perčić</Respect>
        <Confirm to="/contact">potvrdte prisustvo</Confirm>
      </Details>
    </Container>
  </Wrapper>
);

export default Hero;
