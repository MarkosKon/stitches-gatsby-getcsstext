import * as React from "react";

import { getCssText, reset } from "./src/stitches/stitches.config";

/** @type {import("gatsby").GatsbySSR['onRenderBody']} */
export const onRenderBody = ({ pathname, setHeadComponents }) => {
  const css = getCssText();
  // reset();
  console.log({ pathname, length: css.length });
  setHeadComponents([
    <style
      key="stitches"
      id="stitches"
      dangerouslySetInnerHTML={{ __html: css }}
    />,
  ]);
};
