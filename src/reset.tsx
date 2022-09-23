import React from "react";
import { css, Global } from "@emotion/react";

const reset = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body,
  #root,
  #root > div {
    height: 100%;
  }

  body {
    padding: 0 !important;
    line-height: 1.6;
    background-color: white;
    font-family: "NanumSquare", "Noto Sans", sans-serif;
    font-size: 16px;
  }
`;

function GlobalStyle() {
  return <Global styles={reset} />;
}
export default GlobalStyle;
