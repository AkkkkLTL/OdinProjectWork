import { FC } from "react";
import ExpandSection from "../ExpandSection";

interface IProps {
  isOpen: boolean;
  createForm: () => void;
  setOpen: (open:string) => void;
  experiences: any[];
  onChange:  () => void;
  onCancel: () => void;
  toggleCollapsed: () => void;
  onHide: () => void;
  onRemove: () => void;
}

const AddExperienceSection:FC<IProps> = (props) => {
  const { isOpen, createForm, setOpen, experiences, onChange, onCancel, toggleCollapsed, onHide, onRemove } = props;
  return (
    <div className="add-experience-section">
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
export default AddExperienceSection;