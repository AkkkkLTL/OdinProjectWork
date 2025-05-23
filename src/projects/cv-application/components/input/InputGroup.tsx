import type { CSSProperties, ChangeEvent } from "react";

interface IProps {
  /**
   * 输入框的ID
   */
  id: string;
  /**
   * 输入框的占位符文本
   */
  placeholder: string;
  /**
   * 输入框的类型，如"text"、"email"、"password"等
   */
  type: string;
  /**
   * 标签文本
   */
  labelText: string;
  /**
   * 输入框值
   */
  value: string | undefined;
  /**
   * 是否可选
   */
  optional?: boolean;
  /**
   * 是否推荐
   */
  recommended?: boolean;
  /**
   * 数据键名
   */
  "data-key": string;
  /**
   * 输入框值改变时的回调函数
   * @param e 输入框的事件对象
   */
  onChange: (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;

}

/**
 * 输入组组件，用于创建输入框和标签
 */
export default function InputGroup({
  id,
  placeholder,
  type,
  labelText,
  onChange,
  value = "",
  optional,
  recommended,
  "data-key": dataKey,
}:IProps) {

  // 推荐和可选文本的样式
  const textStyle:CSSProperties = {
    marginLeft: "8px",
    color: "rgb(156, 163, 175)",
    fontSize: "10.5px"
  }

  // 输入框的样式
  const inputStyle:CSSProperties = {
    border: "2px solid transparent",
    backgroundColor: "var(--main-bg-color)",
    padding: "10px",
    borderRadius: "12px",
    transition: "border 0.25s, box-shadow 0.25s",
  }

  return (
    <div className="flex flex-col grow gap-[6px] mb-[12px]!">
      <label htmlFor={id}>
        <span className="label-text">{labelText}</span>
        {optional && <span style={textStyle}>optional</span>}
        {recommended && <span style={textStyle}>recommended</span>}
      </label>

      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
          style={inputStyle}
          className="max-w-full min-h-[42px] h-[65px]"
        />
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          data-key={dataKey}
          style={inputStyle}
        />
      )}
    </div>
  );
}