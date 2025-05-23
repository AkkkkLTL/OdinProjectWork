import { useCVStore } from "../../store";
import { STYLEENUM } from "../../types/enum";

export default function ResumeStructualEdit() {

  const setResumeStructual = useCVStore(state => state.setResumeStructual);

  return (
    <>
      <h2>Layout</h2>
      <div className="">
        <button 
          className="p-[8px]! bg-transparent"
          onClick={() => setResumeStructual("top")}
        >
          <div
            className="w-[50px] h-[50px] border-[1px] border-solid border-gray rounded-[8px]!"
            style={{
              background: `linear-gradient(180deg, var(${STYLEENUM.RESUME_THEME_COLOR}) 50%, white 50%)`
            }}
          />
          Top
        </button>
        <button 
          className="p-[8px]! bg-transparent"
          onClick={() => setResumeStructual("left")}
        >
          <div 
            className="w-[50px] h-[50px] border-[1px] border-solid border-gray rounded-[8px]!"
            style={{
              background: `linear-gradient(90deg, var(${STYLEENUM.RESUME_THEME_COLOR}) 50%, white 50%)`
            }}
          />
          Left
        </button>
        <button 
          className="p-[8px]! bg-transparent"
          onClick={() => setResumeStructual("right")}
        >
          <div 
            className="w-[50px] h-[50px] border-[1px] border-solid border-gray rounded-[8px]!"
            style={{
              background: `linear-gradient(90deg, white 50%, var(${STYLEENUM.RESUME_THEME_COLOR}) 50%)`
            }}
          />
          Right
        </button>
      </div>
    </>
  )
}