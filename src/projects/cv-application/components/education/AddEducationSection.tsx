import { ChangeEvent, FC, MouseEvent } from "react";
import ExpandSection from "../ExpandSection";
import { Education } from "../../types/entries";

interface IProps {
  educations: Education[];
  isOpen: boolean;
  onChange: (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  createForm: () => void;
  setOpen: (open:string) => void;
  onCancel: (e:MouseEvent<HTMLButtonElement>) => void;
  toggleCollapsed: (e:MouseEvent<HTMLButtonElement>) => void;
  onHide: (e:MouseEvent<HTMLButtonElement>) => void;
  onRemove: (e:MouseEvent<HTMLButtonElement>) => void;
}

export default function AddEducationSection({
  educations,
  isOpen,
  onChange,
  createForm,
  setOpen,
  onCancel,
  toggleCollapsed,
  onHide,
  onRemove,
}:IProps) {

  return (
    <div className="add-education-section section">
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Education"
        iconName="fa:graduation-cap"
      />
      <div className={`section-content ${isOpen ? "open" : ""}`}>
        {/* DisplayForms */}
        {/* CreateForm */}
      </div>
    </div>
  );
}