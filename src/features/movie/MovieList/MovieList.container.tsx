import React from "react";
import { Box, Stack } from "@mui/material";
import { SearchBar } from "@components";
import MovieItem from "../MovieItem";
import MovieListSkeleton from "../MovieItem/skeleton/MovieItem.skeleton";
import useSearch from "./hooks/useSearch";
import useMovieInifinityList from "./hooks/useMovieInifinityList";

export default function MovieList() {
  const {
    keyword,
    handleSearchChange,
    handleSearchClick,
    isPending,
    searchValue,
  } = useSearch();

  const { isFetching, ref, errorMessage, movieList } =
    useMovieInifinityList(keyword);

  return (
    <Stack justifyContent={"space-between"} display="flex" mt="70px">
      <Box>
        {
          <SearchBar
            loading={isPending}
            value={searchValue}
            handleClick={handleSearchClick}
            handleChange={handleSearchChange}
          />
        }
      </Box>
      <Box mt={4}>
        {movieList.length > 0 ? errorMessage : "검색결과가 없습니다."}
        {!errorMessage &&
          movieList?.map((movie) => {
            return <MovieItem movie={movie} key={movie?.imdbID} />;
          })}
        {isFetching && <MovieListSkeleton />}
      </Box>

      <Box justifyContent={"flex-end"} height="100px" ref={ref} />
    </Stack>
  );
}
