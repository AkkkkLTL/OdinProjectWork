import styled from "styled-components";

const ExperienceInfoSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 24px;
  padding: 36px 24px;

  .experience-info-group {
    display: flex;
    gap: 24px;
    min-width: 318px;
  }

  .experience-info-companyName {
    font-weight: bold;
  }
  .experience-info-positionTitle {
    font-size: 15px;
  }
`

export default function ExperienceInfoSection({info}) {

  if (!info) return;

  const {startDate,endDate,location,companyName,positionTitle,description} = info;

  return (
    <ExperienceInfoSectionStyle>
      <h3>Professional Experience</h3>
      <div className="experience-info-group">
        <div>
          <p>
            {startDate} 
            {startDate && endDate && <span> - </span>}
            {endDate}
          </p>
          <p>{location}</p>
        </div>
        <div>
          <p className="experience-info-companyName">{companyName}</p>
          <p className="experience-info-positionTitle">{positionTitle}</p>
          <p>{description}</p>
        </div>
      </div>
    </ExperienceInfoSectionStyle>
  );
}