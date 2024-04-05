import styled from "styled-components"

const PersonalDetailsStyle = styled.div`
  .personal-details {
    display: flex;
    flex-direction: column;
    border: 0;
    border-radius: 12px;
    background-color: white;
    padding: 18px;
  }

  .personal-details div {
    display: flex;
    flex-direction: column;
  }
`

export default function PersonalDetails({onChange,fullName, email, phoneNumber, address}) {
  return (
    <PersonalDetailsStyle>
      <form className="personal-details">
        <h1>Personal Details</h1>
        <div>
          <label>Full name</label>
          <input 
            placeholder="First and last name"
            onChange={onChange}
            value={fullName}
            data-key={"fullName"}></input>
        </div>
        <div>
          <label>Email</label>
          <input
            placeholder="Enter email"
            onChange={onChange}
            value={email}
            data-key={"email"}></input>
        </div>
        <div>
          <label>Phone number</label>
          <input 
            placeholder="Enter phone number"
            onChange={onChange}
            value={phoneNumber}
            data-key={"phoneNumber"}></input>
        </div>
        <div>
          <label>Address</label>
          <input 
            placeholder="City, Country"
            onChange={onChange}
            value={address}
            data-key={"address"}></input>
        </div>
      </form>
    </PersonalDetailsStyle>
  )
}