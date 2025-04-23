import { CSSProperties } from "react";

import { sidebarButton } from "../styles/styles.css";
import { Icon } from "@/components/icon";

interface IProps {
  onGoToPage: (page:string) => void;
  page: string;
}

export default function Sidebar({
  onGoToPage,
  page,
}:IProps) {

  const buttonStyle:CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
    fontSize: "16px",
    border: "0",
    backgroundColor: "transparent",
    padding: "12px 4px",
    borderRadius: "12px",
    transition: "background-color 0.15s ease-in-out",
  }

  return (
    <nav 
      className={`flex flex-col grow gap-[3px] bg-white rounded-[12px] h-fit`}
      style={{
        padding: "14px 8px",
      }}
    >
      <button
        onClick={() => onGoToPage("content")}
        data-selected={page === "content"}
        className={sidebarButton}
        style={buttonStyle}
      >
        <Icon icon="mdi:file-document-outline" size={20}/>
        Content
      </button>
      <button
        onClick={() => onGoToPage("customize")}
        data-selected={page === "customize"}
        className={sidebarButton}
        style={buttonStyle}
      >
        <Icon icon="mdi:pencil-ruler" size={20} />
        Customize
      </button>
    </nav>
  )
}