import { MouseEvent, ReactNode } from "react";
import CollapsedForm from "./CollapsedForm";
import { Section } from "../../types/entries";

interface IFormComponentProps<T extends Section> {
  /**
   * 对应模块的单项数据
   */
  form: T;
}

interface IProps<T extends Section> {
  /**
   * 表单数据组(模块数据组)
   */
  forms: T[];
  /**
   * 模块数组单项数据的键名(在收起时显示哪个字段)
   */
  titleKey: keyof T;
  /**
   * 模块数组的键名
   */
  arrayName: string;
  /**
   * 点击收缩栏，展开对应的表单数据
   */
  toggleCollapsed: (e:MouseEvent<HTMLButtonElement>) => void;
  /**
   * 点击显隐按钮时触发
   * @param e 显隐按钮对象
   */
  onHide: (e:MouseEvent<HTMLElement>) => void;
  /**
   * 表单组件
   * @param props 表单组件属性
   * @returns 
   */
  FormComponent: (props:IFormComponentProps<T>) => ReactNode;
}

/**
 * 编辑单项数据表单的通用组件（展示数据列表项，并提供编辑功能）
 */
export default function DisplayForm<T extends Section>({
  forms,
  titleKey,
  arrayName,
  toggleCollapsed,
  onHide,
  FormComponent,
}:IProps<T>) {
  return (
    <div className="forms-container">
      {forms.map((form) => 
        form.isCollapsed ? (
          <CollapsedForm
            key={form.id}
            onClick={toggleCollapsed}
            onHide={onHide}
            title={(form as any)[titleKey]}
            arrayName={arrayName}
            form={form}
          />
        ) : (
          <FormComponent
            key={form.id}
            form={form}
          />
        )
      )}
    </div>
  );
}