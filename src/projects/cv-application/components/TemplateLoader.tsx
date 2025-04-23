import { CSSProperties, FC } from "react";

import { Icon } from "@/components/icon";

interface IProps {
  onTemplateLoad: () => void;
  onClear: () => void;
}

const TemplateLoader:FC<IProps> = (props) => {
  const { onTemplateLoad, onClear } = props;

  const templateLoaderStyle:CSSProperties = {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    padding: "12px",
    backgroundColor: "rgb(255, 255, 255)",
    borderRadius: "12px",
    position: "sticky",
    top: "8px",
    zIndex: 3,
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
  }

  return (
    <div 
      className="[&_button]:text-[13.5px] [&_button]:border-none [&_button]:rounded-[4px] [&_button]:flex-grow [&_button]:transition-[0.1s] [&_button]:active:scale-[0.95]"
      style={templateLoaderStyle}
    >
      <button 
        onClick={onClear} 
        className="flex items-center justify-center bg-transparent gap-[8px]"
        style={{
          color: "#b91c1c"
        }}
      >
        <Icon icon="tabler:trash" />
        Clear Resume
      </button>
      <button onClick={onTemplateLoad} className="p-[16px]">
        Load Example
      </button>
    </div>
  )
}
export default TemplateLoader;