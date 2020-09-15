import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import back from '~src/assets/images/back.jpg';
import back2 from '~src/assets/images/back2.jpg';

const Wrapper = styled.section`
  background: linear-gradient(
      to top right,
      rgba(245, 246, 252, 0.52),
      rgba(117, 19, 93, 0.73)
    ),
    url(${back2}) no-repeat center;
  background-size: 100% 100%;
  align-items: center;
  display: flex;
  height: 100vh;
  padding: 0 5%;
  ${p => p.theme.maxWidth.tablet`
    background: linear-gradient(
      to top right,
      rgba(245, 246, 252, 0.52),
      rgba(117, 19, 93, 0.73)
    ),
    url(${back}) no-repeat center;
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
  appearance: none;
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
  font-style: italic;
  font-size: 18px;
  transition: all 0.2s ease;
  &:hover {
    color: rgba(85, 187, 192, 1);
  }
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
        <Title>Maja i Uroš</Title>
        <Text>
          Venčanje će se održati u restoranu “Amfora” kod hotela Jugoslavija.
          <br />
          <MapLink to="/mapa">pogledaj mapu</MapLink>
          <br />
          Skup svatova je u restoranu u 15 časova, dok je građansko venčanje
          zakazano u 16:30 časova.
        </Text>
        <Molba>
          Molimo Vas da svoj dolazak potvrdite najkasnije do 15. novembra.
        </Molba>
        <Respect>
          S poštovanjem,
          <br />
          porodice Mihajlov i Plećić
        </Respect>
        <Confirm to="/potvrda">potvrdite prisustvo</Confirm>
      </Details>
    </Container>
  </Wrapper>
);

export default Hero;
