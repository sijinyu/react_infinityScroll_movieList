import React from "react";
import { Box, Stack } from "@mui/material";
import { SearchBar } from "@components";
import MovieItem from "../MovieItem";
import MovieListSkeleton from "../MovieItem/skeleton/MovieItem.skeleton";
import useSearch from "./hooks/useSearch";
import useMovieInifinityList from "./hooks/useMovieInifinityList";
import useScroll from "@common/hooks/useScroll";

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
  useScroll();

  return (
    <Stack
      justifyContent={"space-between"}
      display="flex"
      mt="70px"
      component="section"
    >
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
      <Box mt={4} component="article">
        {movieList.length > 0 ? errorMessage : "검색결과가 없습니다."}
        {!errorMessage &&
          movieList?.map((movie) => {
            return <MovieItem movie={movie} key={movie?.imdbID} />;
          })}
      </Box>
      {isFetching && <MovieListSkeleton />}
      <Box
        justifyContent={"flex-end"}
        height="100px"
        ref={ref}
        component="article"
      />
    </Stack>
  );
}
