import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import back from '~src/assets/images/back.jpg';

const Wrapper = styled.section`
  background: linear-gradient(
      to top right,
      rgba(245, 246, 252, 0.52),
      rgba(112, 101, 112, 0.73)
    ),
    url(${back}) no-repeat center;
  /* background: linear-gradient(
      to top right,
      rgba(245, 246, 252, 0.52),
      rgba(117, 19, 93, 0.73)
    ),
    url(${back}) no-repeat center; */
  /* background: linear-gradient(
      to top right,
      rgba(245, 246, 252, 0.52),
      rgba(19, 47, 117, 0.73)
    ),
    url(${back}) no-repeat center; */
  background-size: 100% 100%;
  /* background-size: cover; */
  align-items: center;
  display: flex;
  height: 100vh;
  padding: 0 5%;
  ${p => p.theme.maxWidth.tablet`
    background-size: cover;
    font-size: 90%;
    height: fit-content;
  `}
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  margin: auto;
  text-align: center;
  ${p => p.theme.maxWidth.tablet`
    margin-top: 50px;
  `}
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
  margin-bottom: 50px;
  ${p => p.theme.maxWidth.tablet`
    margin-bottom: 50px;
  `}
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

const Molba = styled.p`
  margin: 1em 0;
`;

const Respect = styled.p`
  margin: 3em 0;
`;

const MapLink = styled(Link)`
  text-decoration: underline;
  font-size: 20px;
`;

const Hero = () => (
  <Wrapper>
    <Container>
      <Details>
        <Citat>
          „You don’t marry someone you can live with – you marry the person you
          cannot live without.“
        </Citat>
        <Invitation>
          Pozivamo Vas da uveličate ceremoniju našeg venčanja 30. novembra 2019.
          godine.
        </Invitation>
        <Title>Maja Mihajlov i Uroš Plecić</Title>
        <Text>
          Venčanje će se održati u restoranu “Amfora” kod hotela Jugoslavija.
          <br />
          Građansko venčanje je zakazano u 16:30 časova, dok je skup svatova u
          restoranu u 15 časova.
        </Text>
        <Molba>
          Molim vas da svoj dolazak potvrdite najkasnije do 15. novembra.
        </Molba>
        <MapLink to="/mapa">pogledaj mapu</MapLink>
        <Respect>
          S poštovanjem,
          <br />
          porodice Mihajlov i Plećić
        </Respect>
        <Confirm to="/contact">potvrdte prisustvo</Confirm>
      </Details>
    </Container>
  </Wrapper>
);

export default Hero;
