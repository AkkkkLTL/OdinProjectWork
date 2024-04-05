import styled from "styled-components"

const PersonalInfoSectionStyle = styled.div`
  background-color: #0e374e;
  color: #fff;
  padding: 36px 24px;
`

export default function PersonalInfoSection({fullname, email, phoneNumber, address}) {
  return (
    <PersonalInfoSectionStyle>
      <h1 className="resume-name">{fullname}</h1>
      <div className="contact-info">
        {email && (
          <div>
            <span>{email}</span>
          </div>
        )}
        {phoneNumber && (
          <div>
            <span>{phoneNumber}</span>
          </div>
        )}
        {address && (
          <div>
            <span>{address}</span>
          </div>
        )}
      </div>
    </PersonalInfoSectionStyle>
  )
}