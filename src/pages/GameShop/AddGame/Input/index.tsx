import { IconHolder, InputContainer, InputsWrapper, StyledInput } from "./styles";
import { InputProps } from "./types";

const Input = ({
  icon,
  name,
  type,
  title,
  required,
  placeHolder,
  onClick
}: InputProps) => {
  const lowerCaseTitle = title.toLowerCase();

  return (
    <InputsWrapper>
      <label htmlFor={lowerCaseTitle}>
        {title}
        {required ? <span>*</span> : ''}
      </label>
      <InputContainer>
        <StyledInput
          placeholder={placeHolder}
        />
        {icon && (
            <IconHolder type="button" onClick={onClick}>
              {icon}
            </IconHolder>
        )}
      </InputContainer>
    </InputsWrapper>
  )
}
export default Input;