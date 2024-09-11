import { IValues, Validator } from "./types";

export const required:Validator = (fieldName:string, values:IValues, args?:any) => 
  values[fieldName] === undefined ||
  values[fieldName] === null ||
  values[fieldName] === "" ? "This must be populated" : "";

export const minLength:Validator = (fieldName:string, values: IValues, length:number) =>
  values[fieldName] && values[fieldName].length < length 
  ? `This must be at least ${length} characters` : "";

export const between:Validator = (fieldName:string, values:IValues, bounds:{min:number, max:number}) =>
  values[fieldName] && (values[fieldName] > bounds.max || values[fieldName] < bounds.min)
  ? `This must be between ${bounds.min} and ${bounds.max}` : "";
