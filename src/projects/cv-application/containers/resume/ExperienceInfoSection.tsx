import DisplaySection from "../../components/section/DisplaySection";
import { Experience } from "../../types/entries";
import ExperienceInfo from "../content/experiences/ExperienceInfo";

interface IProps {
  experiences: Experience[] | undefined;
}
export default function ExperienceInfoSection({
  experiences,
}:IProps) {
  return (
    <div className="experience-info-section resume-section">
      <DisplaySection
        array={experiences || []}
        title="Professional Experience"
        InfoComponent={ExperienceInfo as any}
      />
    </div>
  )
}