import { Education } from "@/projects/cv-application/types/entries";

interface IProps {
  data: Education;
}

export default function EducationInfo({
  data,
}:IProps) {

  if (!data) return null;

  return (
    <div className="education-info">
      <div className="education-info-group">
        <p className="dates">
          {data.startDate || ""}
          {data.startDate && data.endDate && <span> - </span>}
          {data.endDate || ""}
        </p>
        <p>{data.location}</p>
      </div>

      <div className="education-info-group">
        <p className="education-info-schoolName">{data.schoolName}</p>
        <p className="education-info-degree">{data.degree}</p>
      </div>
    </div>
  )
}