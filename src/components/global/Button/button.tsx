import React, { ButtonHTMLAttributes } from 'react';
import { ButtonBody, ButtonSpan } from './button.styled';

interface ButtonProps {
  type: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  isActive: boolean;
  children: JSX.Element | JSX.Element[] | string | string[];
}

const Button: React.FC<ButtonProps> = ({ children, type, isActive }) => {
  return (
    <ButtonBody isActive={isActive} type={type}>
      <ButtonSpan>{children}</ButtonSpan>
    </ButtonBody>
  );
};

export default Button;
