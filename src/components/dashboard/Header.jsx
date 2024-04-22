import { HeaderStyle } from "../../styles/dashboard/style";
import Search from "./Search";

export default function Header() {
  const imgSrc = "https://dthezntil550i.cloudfront.net/p4/latest/p42102052243097410008650553/1280_960/12bc8bc0-2186-48fb-b432-6c011a559ec0.png";
  return (
    <HeaderStyle>
      <div className="top">
        <Search />
        <div className="info">
          <img 
            className="bell"
            src="./src/assets/icons/bell-ring-outline.svg" />
          <img 
            src={imgSrc}
          />
          <div className="name">Morgan Oakley</div>
        </div>
      </div>
      <div className="bottom">
        <div className="personal">
          <img 
            src={imgSrc}
          />
          <div className="greet">
            <span>Hi there,</span>
            <span className="name">{`Morgan Oakley (@morgan)`}</span>
          </div>
        </div>
        <div className="btnGroup">
          <button>New</button>
          <button>Upload</button>
          <button>Share</button>
        </div>
      </div>
    </HeaderStyle>
  );
}