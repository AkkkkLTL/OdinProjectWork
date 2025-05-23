import ButtonGroup from "@/projects/cv-application/components/button/ButtonGroup"
import InputGroup from "@/projects/cv-application/components/input/InputGroup"
import { AppContext } from "@/projects/cv-application/contexts"
import { Experience } from "@/projects/cv-application/types/entries"
import { ChangeEvent, MouseEvent, useContext } from "react"

interface IProps {
  form: Experience,
}

export default function ExperienceForm({
  form,
}:IProps) {

  const { handleSectionChange, removeForm, cancelForm, saveForm } = useContext(AppContext);

  return (
    <form 
      className="experience-form section-form"
      id={form.id}
      data-array-name="experiences" 
      onSubmit={(e) => e.preventDefault()} 
    >
      <InputGroup
        type="text"
        id="company-name"
        labelText="Company Name"
        placeholder="Enter Company Name"
        value={form.companyName} 
        onChange={handleSectionChange}
        data-key="companyName"
      />
      <InputGroup
        type="text"
        id="position-title"
        labelText="Position Title"
        placeholder="Enter Position Title"
        value={form.positionTitle} 
        onChange={handleSectionChange}
        data-key="positionTitle"
      />
      <div className="dates-group">
        <InputGroup
          type="text"
          id="date"
          labelText="Start Date"
          placeholder="Enter Start Date"
          value={form.startDate}
          onChange={handleSectionChange}
          data-key="startDate"
        />
        <InputGroup
          type="text"
          id="date"
          labelText="End Date"
          placeholder="Enter End Date"
          value={form.endDate}
          onChange={handleSectionChange}
          data-key="endDate"
        />
      </div>
      <InputGroup
        type="text"
        id="location"
        labelText="Location"
        placeholder="Enter Location"
        value={form.location}
        onChange={handleSectionChange}
        data-key="location"
        optional
      />
      <InputGroup
        type="textarea"
        id="description"
        labelText="Description"
        placeholder="Enter Description"
        value={form.description}
        onChange={handleSectionChange}
        data-key="description"
        optional
      />
      <ButtonGroup 
        onSave={saveForm} 
        onRemove={removeForm} 
        onCancel={cancelForm} 
      />
    </form>
  )
}