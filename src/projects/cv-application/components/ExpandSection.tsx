import { Icon } from "@/components/icon";

interface IProps {
  isOpen: boolean;
  setOpen: (open:string) => void;
  sectionName: string;
  iconName: string;
}

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
      <Icon icon="zondicons:cheveron-up" />
    </button>
  );
}