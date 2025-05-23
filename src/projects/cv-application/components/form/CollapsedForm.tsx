import { MouseEvent } from "react";

import { Icon } from "@/components/icon";
import { Section } from "../../types/entries";

interface IProps<T extends Section> {
  /**
   * 模块中具体项目的标题
   */
  title: string;
  /**
   * 对应模块的数组名
   */
  arrayName: string;
  /**
   * 对应模块的单项数据
   */
  form: T;
  /**
   * 折叠表单的点击事件
   * @param e 按钮对象
   * @returns void - 点击展开对应的表单信息
   */
  onClick: (e:MouseEvent<HTMLButtonElement>) => void;
  /**
   * 点击切换在简历中的显示状态(显示或隐藏)
   * @param e 图标对象
   * @returns void - 在简历中显示或隐藏信息
   */
  onHide: (e:MouseEvent<HTMLElement>) => void;
}

/**
 * 折叠表单的通用组件
 */
export default function CollapsedForm<T extends Section>({
  onClick,
  onHide,
  title,
  arrayName,
  form,
}:IProps<T>) {
  const { isHidden, id } = form;

  return (
    <button
      className="flex items-center justify-between border-none w-full bg-white collapsed-form section-form"
      style={{
        borderTop: "5px solid rgb(243, 244, 246)",
        padding: "12px 14px 12px 24px",
      }}
      id={id}
      type="button"
      onClick={onClick}
      data-array-name={arrayName}
    >
      <p className="text-[17px]">{title}</p>
      <i 
        className="p-[10px]!"
        onClick={(e) => {
          e.stopPropagation();
          onHide(e);
        }}
      >
        <Icon 
          icon={`${isHidden ? "tabler:eye-off" : "tabler:eye"}`}
          size={24}
          className="eye"
        />
      </i>
    </button>
  )
}