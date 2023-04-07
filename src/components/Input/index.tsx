// Styles
import { InputContainer, InputText, ErrorText, Label } from './styles';

// Types
import { IInput } from './types';

const Input = ({ labelName, name, type, placeholder, errorMessage }: IInput) => {
  return (
    <>
      <InputContainer>
        <Label>{labelName}</Label>
        <InputText
          name={name} 
          type={type}
          placeholder={placeholder}
        />
      </InputContainer>
      {errorMessage ? <ErrorText>{errorMessage}</ErrorText> : null}
    </>
  );
};

export { Input };