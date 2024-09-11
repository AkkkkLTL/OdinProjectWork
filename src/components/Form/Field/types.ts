export interface IFieldProps {
  name:string;
  label:string;
  type?: "Text" | "Email" | "Number" | "Select" | "TextArea";
  options?:string[]
}