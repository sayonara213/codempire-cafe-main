import React from 'react';
import { InputField, InputWrap } from './input.styled';

const Input = () => {
  return (
    <InputWrap>
      <InputField placeholder={'Email'} />
    </InputWrap>
  );
};

export default Input;
