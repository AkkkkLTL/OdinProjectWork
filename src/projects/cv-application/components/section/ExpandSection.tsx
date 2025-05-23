import { Icon } from "@/components/icon";

interface IProps {
  /**
   * 模块是否展开
   */
  isOpen: boolean;
  /**
   * 模块名称
   */
  sectionName: string;
  /**
   * 模块图标名称
   */
  iconName: string;
  /**
   * 模块展开/收起时触发
   * @param open 模块展开状态
   * @returns 
   */
  setOpen: (open:string) => void;
}

/**
 * 扩展模块通用组件
 */
export default function ExpandSection({
  isOpen,
  setOpen,
  sectionName,
  iconName,
}:IProps) {

  return (
    <button
      className="flex items-center justify-between w-full bg-transparent border-none p-[24px]!"
      onClick={() => setOpen(isOpen ? "" : sectionName)}
    >
      <h2 className="flex items-center gap-[12px] m-[0]!">
        <Icon icon={iconName} />
        {sectionName}
      </h2>
      <Icon icon="zondicons:cheveron-up" className={`chevron ${isOpen ? "open" : ""}`}/>
    </button>
  );
}