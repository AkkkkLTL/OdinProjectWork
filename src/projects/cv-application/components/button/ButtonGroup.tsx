import { CSSProperties, MouseEvent } from "react";

import { Icon } from "@/components/icon";

interface IProps {
  /**
   * 取消事件处理函数
   */
  onCancel: (e:MouseEvent<HTMLButtonElement>) => void;
  /**
   * 保存事件处理函数
   */
  onSave: (e:MouseEvent<HTMLButtonElement>) => void;
  /**
   * 删除事件处理函数
   */
  onRemove: (e:MouseEvent<HTMLButtonElement>) => void;
}

/**
 * 模块数据编辑通用按钮组
 */
export default function ButtonGroup({
  onCancel,
  onSave,
  onRemove,
}:IProps) {

  // 删除按钮和取消按钮样式
  const delButtonStyle:CSSProperties = {
    backgroundColor: "transparent",
    outline: "1px solid gray",
    color: "gray",
  }

  return (
    <div className="flex justify-between gap-[12px] mt-[14px] py-0 px-[4px] flex-wrap">
      <button
        className="flex items-center gap-[6px]"
        onClick={onRemove}
        type="button"
        style={delButtonStyle}
      >
        <Icon icon="tabler:trash" />
        Delete
      </button>
      <div className="flex gap-[12px]">
        <button 
          onClick={onCancel} 
          type="button"
          style={delButtonStyle}
        >
          Cancel
        </button>
        <button 
          onClick={onSave} 
          type="button"
          style={{
            backgroundColor: "rgb(24, 127, 245)",
            color: "white",
          }}
        >
          Save
        </button>
      </div>
    </div>
  )
}