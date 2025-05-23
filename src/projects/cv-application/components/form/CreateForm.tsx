import type { MouseEvent } from "react";

import { Icon } from "@/components/icon";

interface IProps {
  /**
   * 按钮文本
   */
  buttonText: string;
  /**
   * 点击按钮时触发
   * @param e 按钮对象
   * @returns 
   */
  onClick: (e:MouseEvent<HTMLButtonElement>) => void;
}

/**
 * 创建模块单项的通用按钮
 */
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
      <h4 className="flex items-center justify-items-center gap-[5px]">
        <Icon icon="mdi:plus" className="mr-[8px]"/>
        {buttonText}
      </h4>
    </button>
  )
}