import React from "react";
import { render } from "@testing-library/react";
import MovieItem from "./MovieItem.container";
import { AlertModal } from "@components";
import { RecoilRoot } from "recoil";

describe("<MovieItem />", () => {
  const sample = {
    Title: "Iron Man: Armored Adventures",
    Year: "2008–2012",
    imdbID: "tt0837143",
    Type: "series",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZWNjZTJjZmYtYjhjZS00ZjgwLWFjY2UtMzBlMDkzZmM3M2FiXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
  };
  const setup = (props = {}) => {
    const initialProps = { movie: sample };
    const utils = render(
      <RecoilRoot>
        <MovieItem {...initialProps} {...props} />
      </RecoilRoot>
    );
    const { getByText } = utils;
    const movie = props.movie || initialProps.movie;
    return {
      ...utils,
      getByText,
      movie,
    };
  };
  it("has movie info", () => {
    const { getByText, movie } = setup();
    getByText(movie.Title);
    getByText(movie.Year);
    getByText(movie.Type);
  });
  test("modal, shows the children and a close button", () => {
    const handleClose = jest.fn();
    const open = true;

    //즐겨찾기 리스트내에서 현재 영화 제거
    const { getByText } = render(
      <AlertModal hanldeModal={handleClose} title="즐겨찾기" open={open} />
    );
    expect(getByText("즐겨찾기")).toBeTruthy();
  });
});
