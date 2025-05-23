import PersonalInfoSection from "./PersonalInfoSection";
import { Personal, Sections } from "../../types/entries";
import EducationInfoSection from "./EducationInfoSection";
import { MODULEENUM } from "../../types/enum";
import ExperienceInfoSection from "./ExperienceInfoSection";
import "./resume.css";

interface IProps {
  personalInfo:Personal;
  sections: Sections;
  layout: any;
}

export default function Resume({
  personalInfo,
  sections,
  layout,
}:IProps) {

  return (
    <div className="resume-container">
      <div className={`resume ${layout}`}>
        <PersonalInfoSection 
          personalInfo={personalInfo}
        />
        <div>
          <EducationInfoSection
            educations={sections[MODULEENUM.EDUCATION]}
          />
          <ExperienceInfoSection
            experiences={sections[MODULEENUM.EXPERIENCE]}
          />
        </div>
      </div>
    </div>
  );
}