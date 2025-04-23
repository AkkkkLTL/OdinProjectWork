import { MouseEvent } from "react";

import { Icon } from "@/components/icon";

interface IProps {
  onClick: (e:MouseEvent<HTMLButtonElement>) => void;
  buttonText: string;
}

export default function CreateForm({
  onClick,
  buttonText,
}:IProps) {
  return (
    <button 
      className="bg-transparent rounded-[69420px]" 
      style={{
        padding: "8px 18px",
        border: "4px solid rgb(238, 240, 244)",
        margin: "18px 0"
      }}
      onClick={onClick}
    >
      <h4>
        <Icon icon="mdi:plus" className="mr-[8px]"/>
        {buttonText}
      </h4>
    </button>
  )
}