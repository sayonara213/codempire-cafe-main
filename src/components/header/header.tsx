import React from 'react';
import { HeaderAuth, HeaderContainer } from './header.styled';

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <HeaderAuth>Log in</HeaderAuth>
    </HeaderContainer>
  );
};

export default Header;
