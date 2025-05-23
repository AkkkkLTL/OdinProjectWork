import { ChangeEvent, createContext, MouseEvent } from "react";
import { Education, Experience, Personal, Sections } from "../types/entries";

interface IProps {
  personalInfo: Personal;
  sections: Sections;
  handleSectionChange: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  createForm: (arrayName: keyof Sections, object: any) => void;
  cancelForm: (e:MouseEvent<HTMLButtonElement>) => void;
  removeForm: (e:MouseEvent<HTMLButtonElement>) => void;
  saveForm: (e:MouseEvent<HTMLButtonElement>) => void;
  toggleCollapsed: (e:MouseEvent<HTMLButtonElement>) => void;
  toggleHidden: (e:MouseEvent<HTMLElement>) => void;
}

export const AppContext = createContext<IProps>({
  personalInfo: {},
  sections: {},
  handleSectionChange: () => {},
  createForm: () => {},
  cancelForm: () => {},
  removeForm: () => {},
  saveForm: () => {},
  toggleCollapsed: () => {},
  toggleHidden: () => {},
});