import styled from 'styled-components';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 75px;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => props.theme.color.dark};
`;

export const HeaderAuth = styled.h2`
  margin: 0;

  color: ${(props) => props.theme.color.white};
  font-size: ${(props) => props.theme.fontSize.large};
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
`;
