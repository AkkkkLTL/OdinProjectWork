import { ChangeEvent, MouseEvent, ReactNode } from "react";
import CollapsedForm from "./CollapsedForm";
import { Education, Experience } from "../types/entries";

interface IProps {
  forms: Education[] | Experience[];
  onChange: (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onCancel: (e:MouseEvent<HTMLButtonElement>) => void;
  toggleCollapsed: (e:MouseEvent<HTMLButtonElement>) => void;
  onHide: (e:MouseEvent<HTMLButtonElement>) => void;
  onRemove: (e:MouseEvent<HTMLButtonElement>) => void;
  FormComponent: ReactNode;
  titleKey: keyof Education | keyof Experience;
  arrayName: string;
}
export default function DisplayForm({
  forms,
  onChange,
  onCancel,
  toggleCollapsed,
  onHide,
  onRemove,
  FormComponent,
  titleKey,
  arrayName,
}:IProps) {
  return (
    <div className="forms-container">
      {forms.map((form) => 
        form.isCollapsed ? (
          <CollapsedForm
            key={form.id}
            onClick={toggleCollapsed}
            hideForm={onHide}
            title={form[titleKey]}
            arrayName={arrayName}
            form={form}
          />
        ) : (
          {/* FormComponent */}
        )
      )}
    </div>
  );
}