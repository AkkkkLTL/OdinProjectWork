import { Icon } from "@/components/icon";
import { CSSProperties } from "react";

interface IProps {
  /**
   * cancel event handler
   */
  cancel: () => void;
  save: () => void;
  remove: () => void;
}
export default function Button({
  cancel,
  save,
  remove,
}:IProps) {

  const delButtonStyle:CSSProperties = {
    backgroundColor: "transparent",
    outline: "1px solid gray",
    color: "gray",
  }

  return (
    <div className="flex justify-between gap-[12px] mt-[14px] py-0 px-[4px] flex-wrap">
      <button
        className="flex items-center gap-[6px]"
        onClick={remove}
        type="button"
        style={delButtonStyle}
      >
        <Icon icon="tabler:trash" />
        Delete
      </button>
      <div className="flex gap-[12px]">
        <button 
          onClick={cancel} 
          type="button"
          style={delButtonStyle}
        >
          Cancel
        </button>
        <button 
          onClick={save} 
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