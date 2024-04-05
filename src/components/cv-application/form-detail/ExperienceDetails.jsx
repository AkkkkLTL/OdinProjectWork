import styled from "styled-components"

const ExperienceDetailsStyle = styled.div`
  .experience-details {
    display: flex;
    flex-direction: column;
    border: 0;
    border-radius: 12px;
    background-color: white;
    padding: 18px;
  }

  .experience-details div {
    display: flex;
    flex-direction: column;
  }
`

export default function ExperienceDetails({onChange, info}) {
  const { companyName, positionTitle, startDate, endDate, location, description} = info;
  return (
    <ExperienceDetailsStyle>
      <form 
        className="experience-details section-form"
        data-array-name="experiences"
      >
        <h1>Experience</h1>
        <div>
          <label>Company Name</label>
          <input 
            placeholder="Enter Company Name"
            onChange={onChange}
            value={companyName}
            data-key={"companyName"}
          ></input>
        </div>
        <div>
          <label>Position Title</label>
          <input 
            placeholder="Enter Position Title"
            onChange={onChange}
            value={positionTitle}
            data-key={"positionTitle"}
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
            value={startDate}
            data-key={"endDate"}></input>
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
        <div>
          <label>Description</label>
          <textarea 
            placeholder="Enter Description"
            onChange={onChange}
            value={description}
            data-key={"description"}
          ></textarea>
        </div>
      </form>
    </ExperienceDetailsStyle>
  )
}