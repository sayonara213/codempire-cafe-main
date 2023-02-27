import styled from 'styled-components';

interface ButtonProps {
  readonly isActive: boolean;
  type?: string;
}
export const ButtonBody = styled.button<ButtonProps>`
  all: unset;

  width: 100%;
  height: 48px;

  border-radius: ${(props) => props.theme.borderRadius.small};
  background-color: ${(props) =>
    props.isActive ? props.theme.color.dark : props.theme.color.light};

  color: ${(props) => props.theme.color.white};
  text-align: center;
  font-family: 'regular', sans-serif;
  font-size: ${(props) => props.theme.fontSize.small};
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    span {
      padding-right: 25px;
    }

    span:after {
      opacity: 1;
      right: 0;
    }
  }
`;

export const ButtonSpan = styled.span`
  cursor: pointer;
  display: inline-block;
  position: relative;
  transition: 0.5s;

  &:after {
    content: '>>';
    position: absolute;
    opacity: 0;
    top: 0;
    right: -20px;
    transition: 0.5s;
  }
`;
