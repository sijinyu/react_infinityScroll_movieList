import React from "react";
import { render } from "@testing-library/react";
import Container from "./index";

describe("<Container />", () => {
  it("shows children", () => {
    const { getByText } = render(<Container>test</Container>);
    getByText("test");
  });
});
