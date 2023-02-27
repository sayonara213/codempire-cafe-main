import styled from 'styled-components';

export const SplashScreenWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${(props) => props.theme.color.dark};
`;

export const SplashScreenContent = styled.div``;

export const SplashScreenLogo = styled.h1`
  margin: 0;
  font-family: 'regular', sans-serif;
  font-size: 74px;
  color: ${(props) => props.theme.color.white};
  font-weight: 700;

  line-height: 1;
`;

export const SplashScreenText = styled.p`
  margin: 0;
  font-family: 'regular', sans-serif;
  font-size: 74px;
  color: ${(props) => props.theme.color.white};
  font-weight: 200;

  line-height: 1;
`;
