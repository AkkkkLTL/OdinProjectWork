import { type ChangeEvent, type MouseEvent, useRef, useState } from "react";
import { nanoid } from "nanoid";

// 工具栏组件
import { exampleData } from "./example-data";
import Sidebar from "./components/toolbar/Sidebar";
import TemplateLoader from "./components/toolbar/TemplateLoader";
import Resume from "./containers/resume";

import type { Education, Experience, Personal, SectionItem, Sections } from "./types/entries";
import { MODULEENUM, TOOLENUM } from "./types/enum";
import PersonalForm from "./containers/content/personal/PersonalForm";
import EducationSection from "./containers/content/educations/EducationSection";
import { AppContext } from "./contexts";
import ExperienceSection from "./containers/content/experiences/ExperienceSection";
import useAsyncEffect from "@/hooks/useAsyncEffect";
import Customize from "./containers/customize";
import { useCVStore } from "./store";

/**
 * 应用程序组件
 */
export default function App() {


  // 个人信息
  const [personalInfo, setPersonalInfo] = useState<Personal>(exampleData.personalInfo);
  // 扩展模块信息
  const [sections, setSections] = useState<Sections>(exampleData.sections);
  // 扩展模块状态
  const [sectionOpen, setSectionOpen] = useState<string>('');
  // 页面状态 {TOOLENUM}
  const [currentPage, setCurrentPage] = useState<TOOLENUM>(TOOLENUM.CONTENT);
  // 简历布局状态
  const resumeStructual = useCVStore((state) => state.resumeStructual);
  // 获取数据单项编辑前的状态
  const [preSections, setPreSections] = useState<Sections>(() => structuredClone(exampleData.sections));

  const styleRef = useRef<HTMLStyleElement>(null);

  // useAsyncEffect(async () => {
  //   fetch("https://raw.githubusercontent.com/Sharkri/cv-application/refs/heads/main/src/styles/Resume.css", {
  //     method: "GET",
  //     mode: "cors",
  //   })
  //     .then((res) => res.text())
  //     .then((css) => {
  //       console.log("css", css);
  //       if (!styleRef.current) return;
  //       styleRef.current.textContent = css;
  //     })
  // }, []);

  // --------------------------- 表单输入事件回调函数 --------------------------- //
  /**
   * 处理个人信息的改变
   * @param 输入框改变事件对象
   * @returns void - 更新个人信息
   */
  const handlePersonalInfoChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // 获取输入框的 key 字段，对应个人信息单项属性名
    const { key } = e.target.dataset as Record<string, string>;
    // 表单输入数据时同步更新个人信息
    setPersonalInfo({
      ...personalInfo,
      [key]: e.target.value
    })
  }

  /**
   * 处理扩展模块的改变的通用方法
   * 表单输入数据时同步更新扩展模块的信息
   * @param e 输入框改变事件对象
   * @returns void - 更新扩展模块信息
   */
  const handleSectionChange = (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // 获取输入框的 key 字段，对应模块单项属性名
    const { key } = e.target.dataset as Record<string, string>;
    // 获取最近的表单元素，即当前输入框所在的表单
    const form = e.target.closest(".section-form") as HTMLFormElement;
    // 获取表单的 id 字段，对应模块单项的 id
    const { id } = form;
    // 获取表单的 arrayName 字段，对应模块的数组名
    const { arrayName } = form.dataset as Record<string, keyof Sections>;

    // 若存在对应模块，则更新模块数组信息
    if (!sections || !arrayName) return;
    // 获取对应模块的数组
    const section = sections[arrayName];
    // 若存在 section 数组，则更新模块数组信息
    if (!section) return;
    setSections({
      ...sections,
      [arrayName]: (section).map((obj) => {
        if (obj.id === id) {
          (obj as Record<string, any>)[key] = e.target.value;
        }
        return obj;
      }),
    });
  }

  // --------------------------- 表单操作方法 --------------------------- //
  /**
   * 创建表单的通用方法
   * @param arrayName 模块数组名
   * @param object 单项数据对象
   * @returns void - 更新扩展模块信息
   */
  function createForm(arrayName:keyof Sections, object:SectionItem) {
    if (!sections || !arrayName) return;
    // 深拷贝 sections 对应模块的数组，避免直接修改原数组
    const section = structuredClone(sections[arrayName]);
    // 若存在 section 数组，则将新的 object 加入数组
    if (!section) return;
    section.push(object);
    setSections({
      ...sections,
      [arrayName]: section,
    });
    // 添加对应模块单项的编辑状态
    const preSection = structuredClone(preSections[arrayName]);
    if (!preSection) return;
    preSection.push({id:object.id} as SectionItem);
    setPreSections({
     ...preSections,
      [arrayName]: preSection,
    });
  }

  /**
   * 删除表单对应数据的通用方法
   * @param e 删除表单按钮对象
   * @returns void - 更新扩展模块信息
   */
  function removeForm(e:MouseEvent<HTMLButtonElement>) {
    const form = e.currentTarget.closest(".section-form") as HTMLFormElement;
    const { arrayName } = form.dataset as Record<string, keyof Sections>;
    const { id } = form;

    if (!arrayName) return;
    // 获取对应模块的数组
    const section = sections[arrayName];
    // 若存在 section 数组，则更新模块数组信息
    if (!section) return;
    setSections({
      ...sections,
      [arrayName]: section.filter((obj) => obj.id !== id),
    })

    // 获取对应模块的编辑状态存储数组
    const preSection = preSections[arrayName];
    // 若存在 preSection 数组，则更新模块编辑状态数组信息
    if (!preSection) return;
    setPreSections({
      ...preSections,
      [arrayName]: preSection.filter((item) => item.id !== id),
    })
  }

  /**
   * 表单取消编辑时触发的通用方法
   * @param e 表单取消按钮对象
   * @returns void - 更新扩展模块信息
   */
  function cancelForm(e:MouseEvent<HTMLButtonElement>) {
    const sectionForm = e.currentTarget.closest(".section-form") as HTMLFormElement;
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset as Record<string, keyof Sections>;
    
    if (!arrayName) return;
    const section = sections[arrayName];
    const preSection = preSections[arrayName];

    if (!preSection || !section) return;
    // 创建表单时，若取消编辑，则删除表单
    if (!preSection.find((item) => item.id === id)) {
      removeForm(e);
      return;
    }
    // 编辑表单时，若取消编辑，则恢复表单编辑前的状态
    setSections({
      ...sections,
      [arrayName]: section.map((obj) => {
        if (obj.id === id) {
          obj = structuredClone(preSection.find((item) => item.id === id)) as SectionItem;;
          obj.isCollapsed = true;
        }
        return obj;
      }),
    })
  }

  /**
   * 表单提交时触发的通用方法（保存编辑状态）
   * @param e 表单提交按钮对象
   * @returns void - 更新扩展模块信息
   */
  function saveForm(e:MouseEvent<HTMLButtonElement>) {
    const sectionForm = e.currentTarget.closest(".section-form") as HTMLFormElement;
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset as Record<string, keyof Sections>;

    if (!arrayName) return;
    const preSection = preSections[arrayName];

    if (!preSection) return;
    setPreSections({
      ...preSections,
      [arrayName]: preSection.map((obj) => {
        if (obj.id === id) {
          obj = structuredClone(sections[arrayName]?.find((item) => item.id === id)) as SectionItem;
        }
        return obj;
      }),
    })
    toggleCollapsed(e);
  }

  /**
   * 切换模块单项（显示/隐藏，收起/展开）状态的通用方法
   * @param e 状态切换按钮对象
   * @param key 状态键名
   * @returns void - 更新扩展模块信息
   */
  function toggleValue(e:MouseEvent<HTMLElement>, key:string) {
    const sectionForm = e.currentTarget.closest(".section-form") as HTMLFormElement;
    const { id } = sectionForm;
    const { arrayName } = sectionForm.dataset as Record<string, keyof Sections>;
    if (arrayName) {
      const section = sections[arrayName];
      if (!section) return;
      setSections({
        ...sections,
        [arrayName]: section.map((obj) => {
          if (obj.id === id) {
            (obj as Record<string, any>)[key] = !(obj as Record<string, any>)[key];
          }
          return obj;
        }),
      })
    }
  }

  // 设置打开指定模块
  const setOpen = (sectionName:string) => setSectionOpen(sectionName);

  // 切换模块单项的 收起/展开 状态
  const toggleCollapsed = (e:MouseEvent<HTMLButtonElement>) => toggleValue(e, "isCollapsed");
  // 切换模块单项的 显示/隐藏 状态
  const toggleHidden = (e:MouseEvent<HTMLElement>) => toggleValue(e, "isHidden");


  return (
    <AppContext.Provider value={{
      personalInfo,
      sections,
      handleSectionChange,
      createForm,
      cancelForm,
      removeForm,
      saveForm,
      toggleCollapsed,
      toggleHidden,
    }}>
      <style type="text/css" ref={styleRef} />
      <div className="flex m-auto! w-full gap-[24px] max-w-[1500px]" style={{padding: "32px 24px"}}>
        {/* 编辑区域 */}
        <div className="flex h-fit flex-wrap gap-[24px] grow max-w-[750px]">
          {/* 侧边工具栏 */}
          <Sidebar
            setCurrentPage={setCurrentPage}
            page={currentPage}
          />
          <div className="flex flex-col grow-999 gap-[28px]">
            {/* 模板加载器 */}
            <TemplateLoader 
              onTemplateLoad={() => {
                setPersonalInfo(exampleData.personalInfo);
                setSections(exampleData.sections);
                setPreSections(structuredClone(exampleData.sections));
              }}
              onClear={() => {
                setPersonalInfo({
                  fullName: "",
                  email: "",
                  phoneNumber: "",
                  address: "",
                });
                setSections({ educations: [], experiences: []});
                setPreSections({ educations: [], experiences: []});
              }}
            />
            {sections && currentPage === TOOLENUM.CONTENT && (
              <>
                {/* 个人信息编辑表单 */}
                <PersonalForm
                  data={personalInfo}
                  onChange={handlePersonalInfoChange}
                />
                {/* 教育经历编辑模块 */}
                <EducationSection
                  educations={sections[MODULEENUM.EDUCATION] || []}
                  isOpen={sectionOpen === "Education"}
                  setOpen={setOpen}
                />
                {/* todo:工作经历编辑模块 */}
                <ExperienceSection
                  experience={sections[MODULEENUM.EXPERIENCE] || []}
                  isOpen={sectionOpen === "Experience"}
                  setOpen={setOpen}
                />
              </>
            )}
            {/* todo:排版、字体、颜色等自定义页面 */}
            {sections && currentPage === TOOLENUM.CUSTOMIZE && (
              <Customize />
            )}
          </div>
        </div>
        {/* 简历预览区域 */}
        <Resume 
          personalInfo={personalInfo}
          sections={sections}
          layout={resumeStructual}
        />
      </div>
    </AppContext.Provider>
  );
}