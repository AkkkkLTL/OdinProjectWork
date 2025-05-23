import DisplayForm from "@/projects/cv-application/components/form/DisplayForm";
import ExpandSection from "@/projects/cv-application/components/section/ExpandSection";
import { AppContext } from "@/projects/cv-application/contexts";
import { section } from "@/projects/cv-application/styles/section.css";
import { Experience } from "@/projects/cv-application/types/entries";
import { MODULEENUM } from "@/projects/cv-application/types/enum";
import { nanoid } from "nanoid";
import { memo, useContext } from "react";
import ExperienceForm from "./ExperienceForm";
import CreateForm from "@/projects/cv-application/components/form/CreateForm";

interface IProps {
  /**
   * 工作经历模块数据组
   */
  experience: Experience[];
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

export default memo(function ExperienceSection({
  experience,
  isOpen,
  setOpen,
}:IProps) {

  const { createForm, toggleCollapsed, toggleHidden } = useContext(AppContext);

  const createExperienceForm = () => (
    createForm(MODULEENUM.EXPERIENCE, {
      id: nanoid(),
      companyName: "",
      positionTitle: "",
      location: "",
      description: "",
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
        sectionName="Experience"
        iconName="fa:briefcase"
      />
      <div className={`section-content ${isOpen ? "open" : ""}`}>
        <DisplayForm<Experience>
          forms={experience}
          titleKey="companyName"
          arrayName="experiences"
          toggleCollapsed={toggleCollapsed}
          onHide={toggleHidden}
          FormComponent={ExperienceForm as any}
        />
        <CreateForm
          buttonText="experience"
          onClick={createExperienceForm}
        />
      </div>
    </div>
  );
})