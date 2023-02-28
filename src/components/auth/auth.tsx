import React from 'react';

import { useFormik } from 'formik';

import { validationSchema } from '../../constants/validation/validation';
import { IMAGES } from '../../constants/images';

import * as Styled from './auth.styled';
import Input from '../global/Input/input';
import Button from '../global/Button/button';

interface FormValues {
  [key: string]: string;
  email: string;
  password: string;
}

interface AuthProps {
  isLogin: boolean;
}

const Auth: React.FC<AuthProps> = ({ isLogin }) => {
  const formInputs = ['Email', 'Password'];
  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const onSubmit = () => {
    alert(formik.values);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <Styled.AuthContainer>
      <Styled.AuthWrap onSubmit={formik.submitForm}>
        <Styled.AuthTitleWrap>
          <Styled.Logo src={IMAGES.logo} />
        </Styled.AuthTitleWrap>
        {formInputs.map((input, index) => (
          <Input
            key={index}
            placeholder={input}
            value={formik.values[input.toLowerCase()]}
            onchange={formik.handleChange}
          />
        ))}
        {isLogin ? (
          <Styled.AuthAdditionalWrap>
            <Styled.AuthAdditional href={'/'}>Forgot password?</Styled.AuthAdditional>
            <Styled.AuthAdditional href={'/sign-up'}>Sign up</Styled.AuthAdditional>
          </Styled.AuthAdditionalWrap>
        ) : (
          <Styled.LoginWrap>
            <Styled.AuthAdditional href={'/login'}>Log in</Styled.AuthAdditional>
          </Styled.LoginWrap>
        )}
        <Button type={'submit'} isActive={!formik.errors.email && !formik.errors.password}>
          {isLogin ? 'LOG IN' : 'CREATE'}
        </Button>
        <Styled.SkipAuth>SKIP</Styled.SkipAuth>
      </Styled.AuthWrap>
    </Styled.AuthContainer>
  );
};

export default Auth;
