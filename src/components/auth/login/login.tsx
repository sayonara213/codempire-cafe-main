import React from 'react';
import {
  AuthAdditional,
  AuthAdditionalWrap,
  AuthContainer,
  AuthTitleWrap,
  AuthWrap,
  Logo,
} from './login.styled';
import { IMAGES } from '../../../constants/images';
import Input from '../../global/Input/input';
import Button from '../../global/Button/button';

const Login = () => {
  return (
    <AuthContainer>
      <AuthWrap>
        <AuthTitleWrap>
          <Logo src={IMAGES.logo} />
        </AuthTitleWrap>
        <Input />
        <Input />
        <AuthAdditionalWrap>
          <AuthAdditional>Forgot password?</AuthAdditional>
          <AuthAdditional>Sign Up</AuthAdditional>
        </AuthAdditionalWrap>
        <Button>LOG IN</Button>
      </AuthWrap>
    </AuthContainer>
  );
};

export default Login;
