import React from "react";
import { Box, Stack } from "@mui/material";
import { SearchBar } from "@components";
import { useMovieInifinityList } from "./hooks/useMovieInifinityList";
import MovieItem from "../MovieItem";
import MovieListSkeleton from "../MovieItem/skeleton/MovieItem.skeleton";
import { useSearch } from "./hooks/useSearch";
import { AlertModal } from "src/components/AlertModal";
// import { useModalStore } from "@features/store";
// import { pageConstant } from "@common/constants";

export default function MovieList() {
  //   const { openModal } = useModalStore();
  const {
    keyword,
    handleSearchChange,
    handleSearchClick,
    isPending,
    searchValue,
  } = useSearch();
  const { isFetching, movieList, ref, errorMessage } =
    useMovieInifinityList(keyword);
  return (
    <Stack justifyContent={"space-between"} display="flex" mt="70px">
      <Box>
        <SearchBar
          loading={isPending}
          value={searchValue}
          handleClick={handleSearchClick}
          handleChange={handleSearchChange}
        />
      </Box>
      <AlertModal show titl="asd" />
      <Box mt={4}>
        {errorMessage}
        {!errorMessage &&
          movieList?.map((movie) => {
            return (
              <MovieItem
                movie={movie}
                handleClick={function (): {} {
                  throw new Error("Function not implemented.");
                }}
              />
            );
          })}
        {isFetching && <MovieListSkeleton />}
      </Box>
      <Box justifyContent={"flex-end"} height="100px" ref={ref}></Box>
    </Stack>
  );
}
