import { default as ContainerForm } from "./Form";
import Field from "./Field";
import "./styles.scss";

type CompondComponent = typeof ContainerForm & {
  Field: typeof Field
};

const Form = ContainerForm as CompondComponent;

Form.Field = Field;

export default Form;