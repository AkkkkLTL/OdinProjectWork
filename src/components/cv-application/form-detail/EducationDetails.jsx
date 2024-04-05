import styled from "styled-components"

const EducationDetailsStyle = styled.div`
  .education-details {
    display: flex;
    flex-direction: column;
    border: 0;
    border-radius: 12px;
    background-color: white;
    padding: 18px;
  }

  .education-details div {
    display: flex;
    flex-direction: column;
  }
`

export default function EducationDetails({onChange, info}) {
  const {schoolName, degree, startDate, endDate, location} = info;

  return (
    <EducationDetailsStyle>
      <form 
        className="education-details section-form"
        data-array-name="educations"
      >
        <h1>Education</h1>
        <div>
          <label>School</label>
          <input 
            placeholder="Enter school / university"
            onChange={onChange}
            value={schoolName}
            data-key={"schoolName"}
          ></input>
        </div>
        <div>
          <label>Degree</label>
          <input 
            placeholder="Enter Degree / Filed Of Study"
            onChange={onChange}
            value={degree}
            data-key={"degree"}
          ></input>
        </div>
        <div>
          <label>Start Date</label>
          <input 
            placeholder="Enter Start Date"
            onChange={onChange}
            value={startDate}
            data-key={"startDate"}
          ></input>
        </div>
        <div>
          <label>End Date</label>
          <input 
            placeholder="Enter End Date"
            onChange={onChange}
            value={endDate}
            data-key={"endDate"}
          ></input>
        </div>
        <div>
          <label>Location</label>
          <input 
            placeholder="Enter Location"
            onChange={onChange}
            value={location}
            data-key={"location"}
          ></input>
        </div>
      </form>
    </EducationDetailsStyle>
  )
}