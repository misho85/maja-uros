import React from 'react';
import styled from 'styled-components';
import Form from './Form';
import LineSvg from './LineSvg';
import back2 from '~src/assets/images/back2.jpg';

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
  ${p => p.theme.maxWidth.tablet`
    padding: 0 5%;
  `}
  ${p => p.theme.maxWidth.phone`
    padding-top: 65px;
  `}
`;
const Box = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: auto;
  text-align: center;
  box-shadow: 0 0 50px 0 rgba(130, 128, 128, 0.25);
  padding: 100px 130px;
  min-width: 50%;
  ${p => p.theme.maxWidth.tablet`
    padding: 15%;
  `}
`;

const Instruction = styled.i`
  margin-bottom: 15px;
`;

const ConfirmText = styled.p`
  margin: 50px 0;
`;

const SafetyLine = styled.p`
  margin: 50px 0;
`;

const Divider = styled(LineSvg)`
  width: 50%;
  ${p => p.theme.maxWidth.tablet`
    width: 100%;
  `}
`;

const Intro = () => (
  <Wrapper>
    <Top>
      <Title>Potvrda prisustva</Title>
    </Top>
    <Content>
      <Box>
        <Instruction>Popunite formu</Instruction>
        <h4>Potvrdite prisustvo</h4>
        <Divider />
        <ConfirmText>
          Molimo da Vaše prisustvo potvrdite do 15.11.2019.
        </ConfirmText>
        <Form />
      </Box>
      <SafetyLine>
        Profesionalni vozači su organizovani da Vas i Vaše vozilo vrate bezbedno
        kući.
      </SafetyLine>
    </Content>
  </Wrapper>
);

export default Intro;
