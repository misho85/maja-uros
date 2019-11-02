import React from 'react';
import PropTypes from 'prop-types';
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
    height: fit-content;
  `}
  ${p => p.theme.maxWidth.wide`
    font-size: 80%;
  `}
  ${p => p.theme.maxWidth.desktop`
    font-size: 75%;
  `}
`;

const Container = styled.div`
  align-items: center;
  display: flex;
  margin: auto;
  text-align: center;
  ${p => p.theme.maxWidth.desktop`
    margin-top: -10em;
    margin-left: 3em;
    padding-top: 22em;
  `}
  ${p => p.theme.maxWidth.tablet`
    display: flex;
    flex-direction: column-reverse;
    margin: 0 auto;
    padding-top: 12em;
  `}
  ${p => p.theme.maxWidth.phone`
    padding-top: 8em;
  `}
`;

const Details = styled.div``;

const data = {
  headline: `Maja i Uros`,
  desctiption: `ghjgjhgjhgjhg`,
  btnLabel: `potvrdi dolazak`,
};

const Hero = () => {
  const { headline, description, btnLabel } = data;
  return (
    <Wrapper>
      <Container>
        <Details>
          <h1>{headline}</h1>
          <p>{description}</p>
          <Link to="/contact">{btnLabel}</Link>
        </Details>
      </Container>
    </Wrapper>
  );
};

Hero.propTypes = {
  data: PropTypes.shape({
    headline: PropTypes.string,
    description: PropTypes.string,
    btnLabel: PropTypes.string,
  }).isRequired,
};

export default Hero;
