import { FC } from "react";
import { ExModules } from "../types/entries";

interface IProps {
  personalInfo: {
    fullName: string;
    email: string;
    phoneNumber: string;
    address: string;
  };
  sections: ExModules;
  layout: any;
}

const Resume:FC<IProps> = (props) => {
  const { personalInfo, sections, layout } = props;

  return (
    <div>
      Resume
      <div>
        {/* PersonalInfoSection */}
        <div>
          {/* EducationInfoSection */}
          {/* ExperienceInfoSection */}
        </div>
      </div>
    </div>
  );
}
export default Resume;