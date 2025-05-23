import DisplaySection from "../../components/section/DisplaySection";
import { Education } from "../../types/entries";
import EducationInfo from "../content/educations/EducationInfo";

interface IProps {
  educations: Education[] | undefined;
}
export default function EducationInfoSection({
  educations,
}:IProps) {
  return (
    <div className="education-info-section resume-section">
      <DisplaySection
        array={educations || []}
        InfoComponent={EducationInfo as any}
        title="Education"
      />
    </div>
  )
}