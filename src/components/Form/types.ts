import { ReactNode } from "react";

export interface IValues {
  [key:string]: any;
}

export type Validator = (fieldName:string, values:IValues, args?:any) => string;

export interface IFormProps {
  defaultValues: IValues;
  validationRule: IValidationProp;
  onSubmit: (values:IValues) => Promise<ISubmitResult>;
  children: ReactNode;
}
interface IState {
  values: IValues;
  errors: IErrors;
  submitting: boolean;
  submitted: boolean;
}

export interface IFormContext {
  errors: IErrors;
  values: IValues;
  setValue?: (fieldName:string, value:any) => void;
  validate?:(fieldName:string, value:any) => void;
}

interface IValidation {
  validator: Validator;
  arg?:any;
}

interface IValidationProp {
  [key: string]: IValidation | IValidation[];
}

export interface IErrors {
  [key:string]: string[];
}

export interface ISubmitResult {
  success: boolean;
  errors?: IErrors;
}