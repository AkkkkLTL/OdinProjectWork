import { useEffect, useState } from "react"
import { STYLEENUM } from "../../types/enum";

export default function FontEdit() {

  const [font, setFont] = useState<string>("sans");

  useEffect(() => {
    let propertyFont = font === "sans" ? "sans-serif" : font;
    document.body.style.setProperty(STYLEENUM.RESUME_THEME_FONT, propertyFont);
  }, [font]);

  const buttonStyleClass = `p-[8px 12px] rounded-[8px] flex flex-col items-center justify-around h-[70px] w-[60px] data-[selected=true]:bg-[#0e374e] data-[selected=true]:text-white`

  return (
    <>
      <h2>Font</h2>
      <div className="gap-[8px] flex">
        <button
          className={`font-[serif]! ${buttonStyleClass}`}
          onClick={() => setFont("serif")}
          data-selected={font === "serif"}
        >
          <span className="font-test">Aa</span>
          Serif
        </button>
        <button
          className={`font-[sans-serif]! ${buttonStyleClass}`}
          onClick={() => setFont("sans")}
          data-selected={font === "sans"}
        >
          <span className="font-test">Aa</span>
          Sans
        </button>
        <button
          className={`font-[GenJyuuGothic-Monospace-Medium]! ${buttonStyleClass}`}
          onClick={() => setFont("GenJyuuGothic-Monospace-Medium")}
          data-selected={font === "GenJyuuGothic-Monospace-Medium"}
        >
          <span className="font-test">Aa</span>
          Mono
        </button>
      </div>
    </>
  )
}