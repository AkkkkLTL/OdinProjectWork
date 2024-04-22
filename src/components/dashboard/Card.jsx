import { CardStyle } from "../../styles/dashboard/style";

export default function Card({name, description}) {
  return (
    <CardStyle>
      <div>
        <div className="title">{name}</div>
        <div className="dict">{description}</div>
      </div>
      <div className="btnGroup">
        <img src="./src/assets/icons/star-plus-outline.svg" />
        <img src="./src/assets/icons/eye-plus-outline.svg" />
        <img src="./src/assets/icons/source-fork.svg" />
      </div>
    </CardStyle>
  );
}