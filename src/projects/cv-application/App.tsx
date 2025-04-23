import { ChangeEvent, FC, MouseEvent, useState } from "react";
import { nanoid } from "nanoid";

import { exampleData } from "./example-data";
import Sidebar from "./components/Sidebar";
import TemplateLoader from "./components/TemplateLoader";
import PersonalDetails from "./components/personal-info/PersonalDetails";
import Resume from "./components/Resume";
import AddEducationSection from "./components/education/AddEducationSection";

import { Education, Experience, Personal, ExModules } from "./types/entries";

const App:FC = () => {

  const [personalInfo, setPersonalInfo] = useState<Personal["baseInfo"]>(exampleData.personalInfo);
  const [sections, setSections] = useState<ExModules>(exampleData.sections);
  const [sectionOpen, setSectionOpen] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState("content");
  const [resumeLayout, setResumeLayout] = useState("top");
  const [prevState, setPrevState] = useState<ExModules>({});

  /**
   * @desc xxx
   * @param e 
   * @returns
   */
  const handlePersonalInfoChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { key } = e.target.dataset as Record<string, string>;
    setPersonalInfo({
      ...personalInfo,
      [key]: e.target.value
    })
  }

  const handleSectionChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { key } = e.target.dataset as Record<string, keyof (Education | Experience)>;
    const form = e.target.closest(".section-form") as HTMLFormElement;
    const { id } = form;
    const { arrayName } = form.dataset as Record<string, keyof ExModules>;

    if (sections && arrayName) {
      const section = sections[arrayName];
      setSections({
        ...sections,
        [arrayName]: (section).map((obj) => {
          if (obj.id === id) obj[key] = e.target.value;
          return obj;
        }),
      });
      
    }
  }

  function createForm(arrayName:keyof ExModules, object:Education | Experience) {
    setPrevState(null);
    if (sections && arrayName) {
      const section = structuredClone<Education[] | Experience[]>(sections[arrayName]);
      section.push(object);
      setSections({
       ...sections,
        [arrayName]: [object],
      })
    }
  }

  const createEducationForm = () => (
    createForm("educations", {
      id: nanoid(),
      degree: "",
      schoolName: "",
      location: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
    })
  );

  const createExperienceForm = () => (
    createForm("experiences", {
      id: nanoid(),
      companyName: "",
      positionTitle: "",
      location: "",
      description: "",
      startDate: "",
      endDate: "",
      isCollapsed: false,
      isHidden: false,
    })
  );

  const setOpen = (sectionName:string) => setSectionOpen(sectionName);
  function removeForm(e:MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.closest(".section-form") as HTMLFormElement;
    const { arrayName } = form.dataset as Record<string, keyof ExModules>;
    const { id } = form;

    if (arrayName) {
      const section = sections[arrayName];
  
      setSections({
       ...sections,
        [arrayName]: section?.filter((obj) => obj.id !== id),
      })
    }
  }

  function cancelForm(e:MouseEvent<HTMLButtonElement>) {
    if (prevState == null) {
      removeForm(e);
      return;
    }
    const sectionForm = e.currentTarget.closest(".section-form") as HTMLFormElement;
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset as Record<string, keyof ExModules>;
    if (arrayName) {
      const section = sections[arrayName];
      setSections({
      ...sections,
        [arrayName]: section?.map((obj) => {
          if (obj.id === id) {
            obj.isCollapsed = true;
          }
          return obj;
        }),
      })
    }
  }

  function toggleValue(e:MouseEvent<HTMLButtonElement>, key:string) {
    const sectionForm = e.currentTarget.closest(".section-form") as HTMLFormElement;
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset as Record<string, keyof ExModules>;
    if (arrayName) {
      const section = sections[arrayName];
      setSections({
        ...sections,
        [arrayName]: section.map((obj) => {
          if (obj.id === id) {
            setPrevState(Object.assign({}, obj));
            obj[key] = !obj[key];
          }
          return obj;
        }),
      })
    }
  }

  const toggleCollapsed = (e:MouseEvent<HTMLButtonElement>) => toggleValue(e, "isCollapsed");
  const toggleHidden = (e:MouseEvent<HTMLButtonElement>) => toggleValue(e, "isHidden");

  return (
    <div className="flex m-auto! w-full gap-[24px] max-w-[1500px]" style={{padding: "32px 24px"}}>
      <div className="flex h-fit flex-wrap gap-[24px] grow max-w-[750px]">
        <Sidebar
          onGoToPage={setCurrentPage}
          page={currentPage}
        />
        <div className="flex flex-col grow-999 gap-[28px]">
          <TemplateLoader 
            onTemplateLoad={() => {
              setPersonalInfo(exampleData.personalInfo);
              setSections(exampleData.sections);
            }}
            onClear={() => {
              setPersonalInfo({
                fullName: "",
                email: "",
                phoneNumber: "",
                address: "",
              });
              setSections({ educations: [], experiences: []});
              setPrevState(null);
            }}
          />
          {sections && currentPage === "content" && (
            <>
              <PersonalDetails
                onChange={handlePersonalInfoChange}
                fullName={personalInfo.fullName}
                email={personalInfo.email}
                phoneNumber={personalInfo.phoneNumber}
                address={personalInfo.address}
              />
              <AddEducationSection
                educations={sections["educations"]}
                isOpen={sectionOpen === "Education"}
                onChange={handleSectionChange}
                createForm={createEducationForm}
                setOpen={setOpen}
                onCancel={cancelForm}
                toggleCollapsed={toggleCollapsed}
                onHide={toggleHidden}
                onRemove={removeForm}
              />
              {/* ExperienceSection */}
            </>
          )}
          {/* Customize */}
        </div>
      </div>
      
      <Resume 
        personalInfo={personalInfo}
        sections={sections}
        layout={resumeLayout}
      />
    </div>
  );
}

export default App;