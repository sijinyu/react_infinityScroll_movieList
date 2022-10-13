import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import MovieItem from "../MovieItem";
import { useRecoilValue } from "recoil";
import { favoritMovieState } from "@store/movieAndFavorit";
import useScroll from "@common/hooks/useScroll";

export default function MovieFavoriteList() {
  const movieList = useRecoilValue(favoritMovieState);
  useScroll();
  return (
    <Stack
      justifyContent={"space-between"}
      display="flex"
      mt="70px"
      component="section"
    >
      <Typography variant="h3">내 즐겨찾기</Typography>
      <Box component="article">
        {movieList?.map((movie) => {
          return <MovieItem movie={movie} key={movie?.imdbID} />;
        })}
      </Box>
    </Stack>
  );
}
