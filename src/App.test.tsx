/* eslint-disable jest/no-mocks-import */
import React from "react";
import App from "./App";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@lib/reactQuery";
import "./__mocks__/intersectionObserverMock";

test("<App /> 렌더링시 / 으로 렌더링 되는가", async () => {
  const { getByText } = render(
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <App />
        </RecoilRoot>
      </QueryClientProvider>
    </BrowserRouter>
  );

  expect(getByText(/검색 결과가 없습니다./)).toBeInTheDocument();
});
