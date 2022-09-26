import React from "react";
import { fireEvent, render } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("<SearchBar />", () => {
  it("has search input a button", () => {
    const { getByText, getByPlaceholderText } = render(<SearchBar />);
    getByPlaceholderText("영화 제목을 입력해주세요."); //input이 있는지 유무
    getByText("검색"); //버튼 라벨을 통해 버튼이 있는지 유무
  });
  it("changes input", () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const input = getByPlaceholderText("영화 제목을 입력해주세요.");
    fireEvent.change(input, {
      target: {
        value: "iron",
      },
    });
    expect(input.value).toBe("iron");
  });
  it("onKeyup enter", () => {
    const { getByPlaceholderText } = render(<SearchBar />);
    const input = getByPlaceholderText("영화 제목을 입력해주세요.");
    fireEvent.keyPress(input, { key: "Enter", charCode: 13 });
  });
});
