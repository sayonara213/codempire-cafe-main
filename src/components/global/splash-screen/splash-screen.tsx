import React, { FC } from 'react';
import {
  SplashScreenContent,
  SplashScreenLogo,
  SplashScreenText,
  SplashScreenWrap,
} from './splash-screen.styled';

const SplashScreen: FC = () => {
  return (
    <SplashScreenWrap>
      <SplashScreenContent>
        <SplashScreenLogo>Codempire</SplashScreenLogo>
        <SplashScreenText>Cafe</SplashScreenText>
      </SplashScreenContent>
    </SplashScreenWrap>
  );
};

export default SplashScreen;
