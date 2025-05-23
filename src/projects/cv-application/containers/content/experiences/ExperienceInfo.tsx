import { Experience } from "@/projects/cv-application/types/entries";

interface IProps {
  data: Experience;
}
export default function ExperienceInfo({
  data,
}:IProps) {

  if (!data) return null;

  return (
    <div className="experience-info">
      <div className="experience-info-group">
        <p className="dates">
          {data.startDate}
          {data.startDate && data.endDate && <span> - </span>}
          {data.endDate || ""}
        </p>
        <p>{data.location}</p>
      </div>

      <div className="experience-info-group">
        <p className="experience-info-companyName">{data.companyName}</p>
        <p className="experience-info-positionTitle">{data.positionTitle}</p>
        <p className="experience-info-description">{data.description}</p>
      </div>
    </div>
  )
}