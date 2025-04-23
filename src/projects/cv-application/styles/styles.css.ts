import { style } from "@vanilla-extract/css";

export const sidebarButton = style({
  ':active': {
    scale: '0.95',
  },
  selectors: {
    "&[data-selected='true']": {
      backgroundColor: "whitesmoke !important",
      color: "#0e374e",
    }
  }
});