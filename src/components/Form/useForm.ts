import { FormEvent, useState } from "react";
import { IErrors, IFormContext, IFormProps, IValues } from "./types"

const useForm = (props:IFormProps) => {

  const initErrors:IErrors = {};
  Object.keys(props.defaultValues).forEach(fieldName => {
    initErrors[fieldName] = [];
  });

  // Local State
  const [errors, setErrors] = useState<IErrors>(initErrors);
  const [values, setValues] = useState<IValues>(props.defaultValues);
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [submitted, setSubmitted] = useState<boolean>(false);

  const setValue = (fieldName:string, value: any) => {
    const newValues = { ...values, [fieldName]: value};
    setValues(newValues);
  }

  const validate = (fieldName:string, value:any):string[] => {
    const rules = props.validationRule[fieldName];
    const validateErrors:string[] = [];

    if (Array.isArray(rules)) {
      // execute all the alidation in the array of rules
      rules.forEach(rule => {
        const error = rule.validator(fieldName, values, rule.arg);
        if (error) validateErrors.push(error);
      })
    } else {
      if (rules) {
        const error = rules.validator(fieldName, values, rules.arg);
        if (error) validateErrors.push(error);
      }
    }

    const newError = { ...errors, [fieldName]: validateErrors}
    setErrors(newError);

    return validateErrors;
  }

  // make sure all the fields are valid
  const validateForm = ():boolean => {
    const errors:IErrors = {};
    let haveError:boolean = false;

    Object.keys(props.defaultValues).map(fieldName => {
      errors[fieldName] = validate(fieldName, values[fieldName]);
      if (errors[fieldName].length > 0)
        haveError = true;
    });
    setErrors(errors);
    return !haveError;
  }

  const handleSubmit = async (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmitting(true);
      const result = await props.onSubmit(values);
      setErrors(result?.errors || {});
      setSubmitted(result?.success || false);
      setSubmitting(false);
    }
  }

  // Context
  const context:IFormContext = {
    errors: errors,
    values: values,
    setValue: setValue,
    validate: validate
  }

  return {
    context,
    handleSubmit,
    submitting,
    submitted
  }

}

export default useForm;