import styled from "styled-components";

import EducationInfoSection from "./resume-info/EducationInfoSection";
import ExperienceInfoSection from "./resume-info/ExperienceInfoSection";
import PersonalInfoSection from "./resume-info/PersonalInfoSection";

const ResumeStyle = styled.div`
  width: 21cm;
  height: 29.7cm;
  box-shadow: rgba(50,50,93,0.1) 0px 13px 27px -5px,
    rgba(0,0,0,0.25) 0px 8px 16px -8px;
  position: sticky;
  top: 0px;

  .resume {
    background-color: white;
    width: 100%;
    height: 100%;
    display: grid;
  }
  .resume.top {
    grid-template-rows: auto 1fr;
  }
`

export default function Resume({personalInfo, sections, layout}) {
  return (
    <ResumeStyle>
      <div className="resume top">
        <PersonalInfoSection
          fullname={personalInfo.fullName}
          email={personalInfo.email}
          phoneNumber={personalInfo.phoneNumber}
          address={personalInfo.address}
        />
        <div>
          <EducationInfoSection 
            info={sections.educations}/>
          <ExperienceInfoSection
            info={sections.experiences} />
        </div>
      </div>
    </ResumeStyle>
  )
}