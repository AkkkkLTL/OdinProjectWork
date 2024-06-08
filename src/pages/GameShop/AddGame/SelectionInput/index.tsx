import { IOptions } from "@custypes/game-shopping";
import { InputsWrapper } from "../Input/styles";
import { AddButton, DescriptionHolder, SelectionBody } from "./styles";

const SelectionInput = ({
  title,
  emoji,
  isRequired,
  placeholder,
  description,
  icon,
  inputDescription,
  inputPlaceholder,
  optionsList = [],
  onChange,
}: {
  title?:string,
  emoji?: string,
  isRequired?: boolean,
  placeholder?: string,
  description?: string,
  icon?: JSX.Element,
  inputDescription?: string,
  inputPlaceholder?: string,
  optionsList?: IOptions[],
  onChange?: () => void,
}) => {
  return (
    <InputsWrapper>
      <p>
        {title}
        {isRequired ? <span>*</span> : ''}
      </p>
      <SelectionBody>
        <AddButton>
          {icon} {placeholder}
        </AddButton>
        <DescriptionHolder>
          <p>{emoji}</p>
          <p>{description}</p>
        </DescriptionHolder>
      </SelectionBody>

    </InputsWrapper>
  );
}

export default SelectionInput;