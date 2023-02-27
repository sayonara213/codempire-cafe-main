import styled from 'styled-components';

interface InputWrapProps {
  isFocused: boolean;
}

export const InputWrap = styled.div<InputWrapProps>`
  position: relative;
  width: 100%;
  height: 54px;

  padding: 0 15px 0 15px;
  box-sizing: border-box;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1px solid
    ${(props) => (props.isFocused ? props.theme.color.primary : props.theme.color.border)};
  border-radius: ${(props) => props.theme.borderRadius.small};

  margin-bottom: 26px;

  ${({ isFocused }) => isFocused && `label { transform: translateY(-220%); font-size: 12px;}`}
`;

export const InputField = styled.input`
  all: unset;

  width: 100%;

  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.color.text};
  font-weight: 400;

  z-index: 5;

  &:-webkit-autofill {
    -webkit-background-clip: text;
  }
`;

export const InputIcon = styled.img`
  width: 20px;

  object-fit: contain;
`;

export const InputPlaceholder = styled.label`
  text-align: center;
  background-color: white;

  position: absolute;
  left: 15px;

  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.color.text};
  font-weight: 400;

  z-index: 3;
  transition: transform 150ms ease-out, font-size 150ms ease-out;
`;
