import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import back from '~src/assets/images/back.jpg';
import Icons from './svg/Icons';

const Wrapper = styled.section`
  background-image: linear-gradient(60deg, rgba(241, 241, 241, 0.9) 54%, rgba(243, 246, 248, 0) 100%), url(${back});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  align-items: center;
  display: flex;
  /* height: 100vh; */
  height: 56.25em;
  padding-top: ${p => p.theme.headerHeight};
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
  ${p => p.theme.maxWidth.tablet`
    padding-top: ${p.theme.headerPhoneHeight};
    background-image: linear-gradient(180deg, rgba(241, 241, 241, 0.9) 35%, rgba(241, 241, 241, 0.99) 49%, rgba(241, 241, 241, 0.95) 58%, rgba(241, 241, 241, 0.89) 65%, rgba(241, 241, 242, 0.8) 72%, rgba(241, 242, 243, 0.69) 78%, rgba(241, 243, 244, 0.55) 84%, rgba(242, 244, 245, 0.39) 90%, rgba(242, 244, 246, 0.2) 95%, rgba(243, 246, 248, 0) 100%), url(${back});
    background-position: left;
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
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  ${p => p.theme.maxWidth.phone`
    justify-content: space-around;
  `}
`;

const Icon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  cursor: pointer;
  max-width: 7.875em;
  margin-top: 5.25em;
  svg {
    width: 100%;
    stop {
      transition: all 200ms ease-in-out;
    }
    .icon {
      transition: all 200ms ease-in-out;
    }
  }
  p {
    font-size: 1.3125em;
    line-height: 1;
    margin-top: 1em;
    text-transform: capitalize;
    color: ${p => p.theme.colors.blue3};
  }
  &:hover {
    svg {
      stop:nth-child(-n + 2) {
        stop-color: #12376c;
        stop-opacity: 1;
      }
      stop:nth-child(3) {
        stop-color: #0b74ac;
        stop-opacity: 1;
      }
      stop:nth-child(4) {
        stop-color: #05a2dc;
        stop-opacity: 1;
      }
      .icon {
        fill: #fff;
      }
    }
  }
  ${p => p.theme.maxWidth.phone`
    max-width: 87px;  
    svg {
      max-width: 64px;
    }
    p {
      font-size: 16px;
      color: ${p.theme.colors.white};
    }
  `}
`;

const data = {
  title: ``,
  text: ``,
  iconLabel: ``,
};

const Intro = () => {
  const { title, text, iconLabel } = data;
  return (
    <Wrapper>
      <Container>
        <h1>{title}</h1>
        <p>{text}</p>
        <Box>
          <Icon>
            <Icons form />
            <p>{iconLabel[0]}</p>
          </Icon>
          <Icon>
            <Icons email />
            <p>{iconLabel[1]}</p>
          </Icon>
          <Icon>
            <Icons phone />
            <p>{iconLabel[2]}</p>
          </Icon>
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
