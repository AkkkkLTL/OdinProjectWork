import React, { useState } from "react";
import styled, {createGlobalStyle} from "styled-components";

import exampleData from "../assets/example-data";

import Resume from "../components/cv-application/Resume";
import PersonalDetails from "../components/cv-application/form-detail/PersonalDetails";
import EducationDetails from "../components/cv-application/form-detail/EducationDetails";
import ExperienceDetails from "../components/cv-application/form-detail/ExperienceDetails";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: "Madimi One", sans-serif;
    background-color: #f3f4f6;
  }
`;

const CVAppPageStyle = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  padding: 32px 24px;
  gap: 24px;

  .form-container {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

// CV-application project hame page
export default function CVAppPage() {
  const [personalInfo, setPersonalInfo] = useState(exampleData.personalInfo);
  const [sections, setSections] = useState(exampleData.sections);

  function handlePersonalInfoChange(e) {
    const { key } = e.target.dataset;
    setPersonalInfo({
      ...personalInfo,
      [key]: e.target.value
    });
  }

  function handleSectionInfoChange(e) {
    const { key } = e.target.dataset;
    const form = e.target.closest(".section-form")
    const { arrayName } = form.dataset;
    const section = sections[arrayName];
    setSections({
      ...sections,
      [arrayName]: {
        ...section,
        [key]: e.target.value
      }
    });
  }

  return (
    <React.Fragment>
      {/* import google font */}
      <link href="https://fonts.googleapis.com/css2?family=Madimi+One&display=swap" rel="stylesheet" />
      <GlobalStyle />
      <CVAppPageStyle>
        <div className="edit-side">
          <div className="form-container">
            <PersonalDetails 
              onChange={handlePersonalInfoChange}
              fullName={personalInfo.fullName}
              email={personalInfo.email}
              phoneNumber={personalInfo.phoneNumber}
              address={personalInfo.address}
            />
            <EducationDetails 
              onChange={handleSectionInfoChange}
              info={sections.educations}/>
            <ExperienceDetails 
              onChange={handleSectionInfoChange}
              info={sections.experiences}/>
          </div>
        </div>
        <Resume
          personalInfo={personalInfo}
          sections={sections}
        />
      </CVAppPageStyle>
    </React.Fragment>
  );
}