import { MouseEvent, ReactNode } from "react";

import "../styles/CollapsedForm.css";
import { Icon } from "~/src/components/icon";
import { Education, Experience } from "../types/entries";

interface IProps {
  /**
   * collapsed form click event handler
   * @param e mouse event object
   * @returns 
   */
  onClick: (e:MouseEvent<HTMLButtonElement>) => void;
  hideForm: (e:MouseEvent<SVGSVGElement>) => void;
  title: string;
  arrayName: string;
  form: Education | Experience;
}
export default function CollapsedForm({
  onClick,
  hideForm,
  title,
  arrayName,
  form,
}:IProps) {
  const { isHidden, id } = form;

  return (
    <button
      className="flex items-center justify-between border-none w-full bg-white"
      style={{
        borderTop: "5px solid rgb(243, 244, 246)",
        padding: "12px 14px 12px 24px",
      }}
      id={id}
      onClick={onClick}
      data-array-name={arrayName}
    >
      <p className="">{title}</p>
      <Icon 
        icon={`${isHidden ? "tabler:chevron-down" : "tabler:chevron-up"}`}
        onClick={(e) => {
          e.stopPropagation();
          hideForm(e);
        }}
      />
    </button>
  )
}