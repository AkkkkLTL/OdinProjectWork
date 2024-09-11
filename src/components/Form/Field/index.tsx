import { FC } from "react";
import { IFieldProps } from "./types";
import useField from "./useField";

const Field:FC<IFieldProps> = (props) => {

  const { name, label, options } = props;

  const {
    type, context,
    handleChange, handleBlur
  } = useField(props);

  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      {(type === "Text" || type === "Email" || type === "Number") && (
        <input
          type={type.toLowerCase()}
          id={name}
          value={context.values[name]}
          onChange={e => handleChange(e, context)}
          onBlur={e => handleBlur(e, context)}
        />
      )}
      {(type === "TextArea") && (
        <textarea
          id={name}
          value={context.values[name]}
          onChange={e => handleChange(e, context)}
          onBlur={e => handleBlur(e, context)}
        />
      )}
      {(type === "Select") && (
        <select
          value={context.values[name]}
          onChange={e => handleChange(e, context)}
          onBlur={e => handleBlur(e, context)}
        >
          {options && options.map(option => (
            <option
              key={option}
              value={option}
            >
              {option}
            </option>
          ))}
        </select>
      )}
      {context.errors[name] && context.errors[name].length > 0 && (
        <div data-testid="formErrors">
          {context.errors[name].map(error => (
            <span key={error} className="form-error">
              {error}
            </span>
          ))}
        </div>
      )}
    </div>
  )
}

export default Field;