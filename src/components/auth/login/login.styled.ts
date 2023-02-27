import styled from 'styled-components';

export const AuthContainer = styled.div`
  width: 100%;
  height: calc(100vh - 75px);

  background-color: ${(props) => props.theme.color.white};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const AuthWrap = styled.form`
  width: 306px;
  display: flex;
  flex-direction: column;
`;

export const AuthTitleWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-bottom: 50px;
`;
export const Logo = styled.img`
  width: 180px;
  object-fit: contain;
`;

export const AuthInput = styled.input`
  all: unset;
  width: 100%;
  height: 54px;
  border: 1px solid ${(props) => props.theme.color.border};
  border-radius: ${(props) => props.theme.borderRadius.small};

  margin-bottom: 26px;

  font-family: 'regular', sans-serif;
  font-size: ${(props) => props.theme.fontSize.medium};
  color: ${(props) => props.theme.color.text};
  font-weight: 400;

  &::placeholder {
    color: ${(props) => props.theme.color.text};
    font-weight: 400;
  }
`;

export const AuthButton = styled.button``;

export const AuthAdditionalWrap = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AuthAdditional = styled.a`
  font-family: 'regular', sans-serif;
  font-size: ${(props) => props.theme.fontSize.small};
  color: ${(props) => props.theme.color.text};
  font-weight: 600;

  margin-bottom: 80px;
`;