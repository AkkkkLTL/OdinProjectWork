import { globalStyle, style } from "@vanilla-extract/css";

export const section = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "white",
  borderRadius: "12px",
});

globalStyle(`${section} .section-content`, {
  width: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  position: "relative",

  visibility: "hidden",
  opacity: 0,
  transform: "translateY(-25px)",
  height: 0,
  transformOrigin: "top",
  zIndex: 2,
});

globalStyle(`${section} .section-content.open`, {
  transition: "opacity, transform, visibility",
  transitionDuration: "0.25s",
  visibility: "visible",
  opacity: 1,
  transform: "translateY(0)",
  height: "auto",
});

globalStyle(`${section} .chevron`, {
  transition: "transform 0.3s",
  transform: "rotate(-180deg)",
});

globalStyle(`${section} .chevron.open`, {
  transform: "rotate(0)",
});

globalStyle(`${section} .forms-container`, {
  width: "100%",
});

globalStyle(`${section} .collapsed-form:last-of-type`, {
  borderBottom: "5px solid rgb(243, 244, 246)",
});

globalStyle(`${section} .eye`, {
  color: "rgb(77, 77, 77) !important",
  transition: "0.2s",
});

globalStyle(`${section} .eye:hover`, {
  color: "black !important",
});