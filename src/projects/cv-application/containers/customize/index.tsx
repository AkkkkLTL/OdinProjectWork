import FontEdit from "./FontEdit";
import ResumeStructualEdit from "./ResumeStructualEdit";
import ThemeColorEdit from "./ThemeColorEdit";

export default function Customize() {

  const customStyle = "bg-white rounded-[12px]! p-[18px]!"

  return (
    <div className="flex flex-col gap-[28px]">
      <div className={customStyle}>
        {/* 简历布局结构编辑 */}
        <ResumeStructualEdit />
      </div>
      <div className={customStyle}>
        {/* 简历颜色自定义 */}
        <ThemeColorEdit />
      </div>
      <div className={customStyle}>
        {/* 简历文字字体选择 */}
        <FontEdit />
      </div>
    </div>
  );
}