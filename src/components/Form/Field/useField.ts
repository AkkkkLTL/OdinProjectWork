import { ChangeEvent, FocusEvent, useContext } from "react";
import { FormContext } from "../contex";
import { IFieldProps } from "./types";
import { IFormContext } from "../types";

const useField = (props:IFieldProps) => {
  const context = useContext(FormContext);
  const type = props.type || "Text";

  const handleChange = (
    e:
    | ChangeEvent<HTMLInputElement>
    | ChangeEvent<HTMLTextAreaElement>
    | ChangeEvent<HTMLSelectElement>,
    context:IFormContext
  ) => {
    if (context.setValue) {
      context.setValue(props.name, e.currentTarget.value);
    }
  }

  const handleBlur = (
    e:
    | FocusEvent<HTMLInputElement>
    | FocusEvent<HTMLTextAreaElement>
    | FocusEvent<HTMLSelectElement>,
    context: IFormContext
  ) => {
    if (context.validate) {
      context.validate(props.name, e.currentTarget.value);
    }
  }

  return {
    type, context,
    handleChange, handleBlur
  }
}

export default useField;