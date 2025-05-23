import { useContext } from "react";
import { type Education } from "@/projects/cv-application/types/entries";
import DisplayForm from "@/projects/cv-application/components/form/DisplayForm";
import ExpandSection from "@/projects/cv-application/components/section/ExpandSection";
import { section } from "@project/cv-application/styles/section.css";
import EducationForm from "./EducationForm";
import CreateForm from "@/projects/cv-application/components/form/CreateForm";
import { AppContext } from "@/projects/cv-application/contexts";
import { MODULEENUM } from "@/projects/cv-application/types/enum";
import { nanoid } from "nanoid";

interface IProps {
  /**
   * 教育经历模块数据组
   */
  educations: Education[];
  /**
   * 模块是否展开
   */
  isOpen: boolean;
  /**
   * 模块展开/收起时触发
   * @param open 模块展开状态
   */
  setOpen: (open:string) => void;
}

/**
 * 教育经历编辑模块
 */
export default function EducationSection({
  educations,
  isOpen,
  setOpen,
}:IProps) {

  const { createForm, toggleCollapsed, toggleHidden } = useContext(AppContext);

  const createEducationForm = () => (
    createForm(MODULEENUM.EDUCATION, {
      id: nanoid(),
      degree: "",
      schoolName: "",
      location: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
    })
  );

  return (
    <div className={section}>
      <ExpandSection
        isOpen={isOpen}
        setOpen={setOpen}
        sectionName="Education"
        iconName="fa:graduation-cap"
      />
      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForm<Education>
          forms={educations}
          FormComponent={EducationForm as any}
          toggleCollapsed={toggleCollapsed}
          onHide={toggleHidden}
          titleKey="schoolName"
          arrayName="educations"
        />
        <CreateForm
          onClick={createEducationForm}
          buttonText="Education"
        />
      </div>
    </div>
  );
}