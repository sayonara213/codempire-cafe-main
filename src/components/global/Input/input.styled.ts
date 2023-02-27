import styled from 'styled-components';

export const InputWrap = styled.div`
  width: 100%;
  height: 54px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: 1px solid ${(props) => props.theme.color.border};
  border-radius: ${(props) => props.theme.borderRadius.small};

  margin-bottom: 26px;
`;

export const InputField = styled.input`
  all: unset;

  width: 100%;
  margin: 0 15px 0 15px;

  font-family: 'Roboto', sans-serif;
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.color.text};
  font-weight: 400;

  &::placeholder {
    color: ${(props) => props.theme.color.text};
    font-weight: 400;
  }
`;
