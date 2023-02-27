import React from 'react';
import {
  AuthAdditional,
  AuthAdditionalWrap,
  AuthContainer,
  AuthTitleWrap,
  AuthWrap,
  Logo,
  SkipAuth,
} from './login.styled';
import { IMAGES } from '../../../constants/images';
import Input from '../../global/Input/input';
import Button from '../../global/Button/button';
import { useFormik } from 'formik';
import { validationSchema } from '../../../constants/validation/validation';

interface FormValues {
  [key: string]: string;
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const formInputs = ['Email', 'Password'];
  const initialValues: FormValues = {
    email: '',
    password: '',
  };

  const onSubmit = () => {
    console.log(formik.values);
  };

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: onSubmit,
  });

  return (
    <AuthContainer>
      <AuthWrap onSubmit={formik.submitForm}>
        <AuthTitleWrap>
          <Logo src={IMAGES.logo} />
        </AuthTitleWrap>
        {formInputs.map((input, index) => (
          <Input
            key={index}
            placeholder={input}
            value={formik.values[input.toLowerCase()]}
            onchange={formik.handleChange}
          />
        ))}
        <AuthAdditionalWrap>
          <AuthAdditional href={'/'}>Forgot password?</AuthAdditional>
          <AuthAdditional href={'/'}>Sign Up</AuthAdditional>
        </AuthAdditionalWrap>
        <Button type={'submit'} isActive={!formik.errors.email}>
          LOG IN
        </Button>
        <SkipAuth>Skip</SkipAuth>
      </AuthWrap>
    </AuthContainer>
  );
};

export default Login;
