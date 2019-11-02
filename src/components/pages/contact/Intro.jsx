import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Form from './Form';
import back from '~src/assets/images/back.jpg';

const Wrapper = styled.section`
  background-image: linear-gradient(60deg, rgba(241, 241, 241, 0.9) 54%, rgba(243, 246, 248, 0) 100%), url(${back});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 100%;
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
  width: 100%;
  max-width: 30.3em;
  margin: 0 auto;
  text-align: center;
  h1 {
    font-size: 3.75em;
  }
  p {
    font-size: 1.5em;
    line-height: 2.25;
    color: ${p => p.theme.colors.blue1};
  }
  ${p => p.theme.maxWidth.tablet`
    padding: 0 5%;
  `}
  ${p => p.theme.maxWidth.phone`
    padding-top: 90px;
    padding-bottom: 80px;
    h1 {
      font-size: 32px;
    }
    p {
      font-size: 16px;
      line-height: 1.875;
      max-width: 208px;
      margin: 0 auto;
    }
  `}
`;

const Box = styled.div`
  align-items: center;
  display: flex;
  margin: auto;
  text-align: center;
`;

const data = {
  title: ``,
  text: ``,
};

const Intro = () => {
  const { title, text } = data;
  return (
    <Wrapper>
      <Container>
        <h1>{title}</h1>
        <p>{text}</p>
        <Box>
          <Form />
        </Box>
      </Container>
    </Wrapper>
  );
};

Intro.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    text: PropTypes.string,
    iconLabel: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
};

export default Intro;
