import type * as Stitches from "@stitches/react";
import { createStitches } from "@stitches/react";

const {
  styled,
  css,
  globalCss,
  keyframes,
  reset,
  getCssText,
  theme,
  config,
} = createStitches({
  theme: {
    colors: {},
    borderStyles: {},
    borderWidths: {},
    fonts: {},
    fontSizes: {},
    fontWeights: {},
    letterSpacings: {},
    lineHeights: {},
    radii: {},
    shadows: {},
    sizes: {},
    space: {},
    transitions: {},
    zIndices: {},
  },
  media: {},
  utils: {},
});

export type CSS = Stitches.CSS<typeof config>;

export {
  styled,
  css,
  globalCss,
  keyframes,
  reset,
  getCssText,
  theme,
  // babel doesn't like to export it as config,
  config as stitchesConfig,
};
