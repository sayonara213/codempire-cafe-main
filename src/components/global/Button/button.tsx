import React, { PropsWithChildren } from 'react';
import { ButtonBody, ButtonSpan } from './button.styled';

const Button: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <ButtonBody isActive={true}>
      <ButtonSpan>{children}</ButtonSpan>
    </ButtonBody>
  );
};

export default Button;
