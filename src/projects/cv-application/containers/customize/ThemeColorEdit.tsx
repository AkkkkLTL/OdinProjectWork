import { type ChangeEvent } from "react"
import { STYLEENUM } from "../../types/enum";
import { colorPicker } from "../../styles/colorPicker.css";

function hexToRgb(hex:string) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  } : null;
}

export default function ThemeColorEdit() {

  const updateProperty = (key:string, val:string) => 
    document.body.style.setProperty(key, val);


  const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
    const hexColor = e.target.value;
    const { r, g, b } = hexToRgb(hexColor) || { r: 0, g: 0, b: 0 };
    const brightness = 0.2126 * r + 0.7152 * g + 0.0722 * b;
    const isBrighter = brightness > 128;
    const sectionResumeBg = isBrighter 
      ? "rgba(0, 0, 0, 0.9)"
      : "rgba(14, 55, 78, 0.07)";
    const headerResultColor = isBrighter ? "black" : "white";
    
    updateProperty(STYLEENUM.RESUME_THEME_HEADER_COLOR, headerResultColor);
    updateProperty(STYLEENUM.RESUME_SECTION_BG, sectionResumeBg);
    updateProperty(STYLEENUM.RESUME_THEME_COLOR, hexColor);
  }

  return (
    <>
      <h2>Color</h2>
      <label className="accent-color">
        Accent Color
        <input
          className={colorPicker}
          type="color"
          defaultValue={getComputedStyle(document.body).getPropertyValue(
            STYLEENUM.RESUME_THEME_COLOR
          )}
          onChange={handleColorChange}
        />
      </label>
    </>
  )
}