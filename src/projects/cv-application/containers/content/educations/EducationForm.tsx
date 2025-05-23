import { memo, useContext } from "react";
import InputGroup from "@/projects/cv-application/components/input/InputGroup";
import ButtonGroup from "@/projects/cv-application/components/button/ButtonGroup";
import { type Education } from "@/projects/cv-application/types/entries";
import { AppContext } from "@/projects/cv-application/contexts";

interface IProps {
  /**
   * 教育经历模块数据组单项数据
   */
  form: Education;
}

function EducationForm({
  form,
}:IProps) {
  const { cancelForm, saveForm, removeForm, handleSectionChange } = useContext(AppContext);

  return (
    <form
      className="education-form section-form"
      id={form.id}
      data-array-name="educations"
      onSubmit={(e) => e.preventDefault()}
    >
      <InputGroup
        type="text"
        id="school-name"
        labelText="School"
        placeholder="Enter School / University"
        value={form.schoolName || ""}
        onChange={handleSectionChange}
        data-key="schoolName"
      />
      <InputGroup
        type="text"
        id="degree"
        labelText="Degree"
        placeholder="Enter Degree / Field of Study"
        value={form.degree || ""}
        onChange={handleSectionChange}
        data-key="degree"
      />
      <div className="dates-group">
        <InputGroup
          type="text"
          id="date"
          labelText="Start Date"
          placeholder="Enter Start Date"
          value={form.startDate || ""}
          onChange={handleSectionChange}
          data-key="startDate"
        />
        <InputGroup
          type="text"
          id="date"
          labelText="End Date"
          placeholder="Enter End Date"
          value={form.endDate || ""}
          onChange={handleSectionChange}
          data-key="endDate"
        />
      </div>
      <InputGroup
        type="text"
        id="location"
        labelText="Location"
        placeholder="Enter Location"
        value={form.location || ""}
        onChange={handleSectionChange}
        data-key="location"
      />
      
      <ButtonGroup 
        onSave={saveForm} 
        onCancel={cancelForm} 
        onRemove={removeForm} 
      />
    </form>
  )
}
export default memo(EducationForm);