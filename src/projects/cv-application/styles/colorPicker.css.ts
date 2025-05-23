import { style } from "@vanilla-extract/css";

export const colorPicker = style({
  width: "32px",
  height: "32px",
  borderRadius: "999px",
  border: "none",
  padding: "0",

  selectors: {
    '&::-webkit-color-swatch': {
      border: "none",
      borderRadius: "999px",
      padding: "0",
    },
    '&::-webkit-color-swatch-wrapper': {
      border: "none",
      borderRadius: "999px", // Fixes the border radius on the color picker on mac
      padding: "0",
    },
    '&::-moz-color-swatch': {
      border: "none",
      borderRadius: "999px",
      padding: "0",
    },
    '&::-moz-color-swatch-wrapper': {
      border: "none",
      borderRadius: "999px", // Fixes the border radius on the color picker on mac
      padding: "0",
    }
  }
})