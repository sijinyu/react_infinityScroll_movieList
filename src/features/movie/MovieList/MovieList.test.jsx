import React from "react";
import { render } from "@testing-library/react";
import MovieList from "./MovieList.container";
import { RecoilRoot } from "recoil";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@lib/reactQuery";
import { BrowserRouter } from "react-router-dom";
import "../../../__mocks__/IntersectionObserverMock";

describe("<MovieList />", () => {
  it("renders movies properly", () => {
    const { getAllByAltText } = render(
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <RecoilRoot>
            <MovieList />
          </RecoilRoot>
        </QueryClientProvider>
      </BrowserRouter>
    );
  });
});
