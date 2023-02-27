import React, { useEffect } from 'react';
import { InputField, InputIcon, InputPlaceholder, InputWrap } from './input.styled';
import { IMAGES } from '../../../constants/images';

interface InputProps {
  placeholder: string;
  value: any;
  onchange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: React.FC<InputProps> = ({ placeholder, value, onchange }) => {
  const [isPasswordVisible, setIsPasswordVisible] = React.useState(false);
  const [isSelected, setIsSelected] = React.useState(false);

  useEffect(() => {
    if (value !== '') {
      setIsSelected(true);
    }
  }, [value]);

  const changePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const onFocused = () => {
    setIsSelected(true);
  };
  const onBlurred = (e: React.FormEvent<HTMLInputElement>) => {
    e.currentTarget.value === '' && setIsSelected(false);
  };

  return (
    <InputWrap isFocused={isSelected}>
      <InputField
        type={
          placeholder === 'Email'
            ? placeholder.toLowerCase()
            : isPasswordVisible
            ? 'text'
            : 'password'
        }
        onFocus={onFocused}
        onBlur={onBlurred}
        value={value}
        onChange={onchange}
        name={placeholder.toLowerCase()}
      />
      <InputPlaceholder>{placeholder}</InputPlaceholder>
      {placeholder === 'Password' && (
        <InputIcon
          src={isPasswordVisible ? IMAGES.show : IMAGES.hide}
          onClick={changePasswordVisibility}
        />
      )}
    </InputWrap>
  );
};

export default Input;
