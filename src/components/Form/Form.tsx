import { FC } from "react";
import { IFormProps } from "./types";
import useForm from "./useForm";
import { FormContext } from "./contex";

const Form:FC<IFormProps> = (props) => {

  const {
    submitting, submitted,
    context,
    handleSubmit
  } = useForm(props);

  return (
    <FormContext.Provider value={context}>
      <form
        className="form"
        noValidate={true}
        onSubmit={handleSubmit}
      >
        <div>
          {props.children}
        </div>
        <div className="form-group">
            <button 
              type="submit"
              disabled={submitting || submitted}
            >
              Submit
            </button>
          </div>
      </form>
    </FormContext.Provider>
  )
}

export default Form;