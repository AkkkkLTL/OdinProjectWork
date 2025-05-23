import { type CSSProperties } from "react";

import { Icon } from "@/components/icon";
import { TOOLENUM } from "../../types/enum";
import { sidebarButton } from "../../styles/styles.css";

interface IProps {
  /**
   * 当前功能模块名称
   */
  page: string;
  /**
   * 切换功能模块
   * @param page 功能模块名称
   * @returns void 设置当前功能模块
   */
  setCurrentPage: (page:TOOLENUM) => void;
}

/**
 * 工具栏组件
 */
export default function Sidebar({
  setCurrentPage,
  page,
}:IProps) {

  // 按钮样式
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
        onClick={() => setCurrentPage(TOOLENUM.CONTENT)}
        data-selected={page === TOOLENUM.CONTENT}
        className={sidebarButton}
        style={buttonStyle}
      >
        <Icon icon="mdi:file-document-outline" size={20}/>
        Content
      </button>
      <button
        onClick={() => setCurrentPage(TOOLENUM.CUSTOMIZE)}
        data-selected={page === TOOLENUM.CUSTOMIZE}
        className={sidebarButton}
        style={buttonStyle}
      >
        <Icon icon="mdi:pencil-ruler" size={20} />
        Customize
      </button>
    </nav>
  )
}