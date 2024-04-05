import styled from "styled-components";

const EducationInfoSectionStyle = styled.div`

  display: flex;
  flex-direction: column;
  gap: 18px;
  margin-bottom: 24px;
  padding: 36px 24px;

  .education-info-group {
    display: flex;
    gap: 24px;
  }

  .education-info-schoolName {
    font-weight: bold;
  }
  .education-info-degree {
    font-size: 15px;
  }
`

export default function EducationInfoSection({info}) {
  if (!info) return;
  const {schoolName, degree, startDate, endDate, location} = info;
  return (
    <EducationInfoSectionStyle>
      <h3>Education</h3>
      <div className="education-info-group">
        <div>
          <p>
            {startDate} 
            {startDate && endDate && <span> - </span>}
            {endDate}
          </p>
          <p>{location}</p>
        </div>
        <div>
          <p className="education-info-schoolName">{schoolName}</p>
          <p className="education-info-degree">{degree}</p>
        </div>
      </div>
    </EducationInfoSectionStyle>
  );
}