import { Icon } from "@/components/icon";
import { Personal } from "../../types/entries";

interface IProps {
  personalInfo:Personal;
}

export default function PersonalInfoSection({
  personalInfo
}:IProps) {
  return (
    <div className="personal-info">
      <h1 className="resume-name">{personalInfo.fullName}</h1>
      <div className="contact-info">
        {personalInfo.email && (
          <div>
            <Icon icon="mdi:email" />
            <span>{personalInfo.email}</span>
          </div>
        )}
        {personalInfo.phoneNumber && (
          <div>
            <Icon icon="mdi:phone" />
            <span>{personalInfo.phoneNumber}</span>
          </div>
        )}
        {personalInfo.address && (
          <div>
            <Icon icon="mdi:map-marker" />
            <span>{personalInfo.address}</span>
          </div>
        )}
      </div>
    </div>
  )
}