import { CSSProperties, ChangeEvent } from "react";

interface IProps {
  id: string;
  placeholder: string;
  type: string;
  labelText: string;
  onChange: (e:ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  value: string;
  optional?: string;
  recommended?: boolean;
  "data-key": string;
}

export default function InputGroup({
  id,
  placeholder,
  type,
  labelText,
  onChange,
  value,
  optional,
  recommended,
  "data-key": dataKey,
}:IProps) {

  const textStyle:CSSProperties = {
    marginLeft: "8px",
    color: "rgb(156, 163, 175)",
    fontSize: "10.5px"
  }

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