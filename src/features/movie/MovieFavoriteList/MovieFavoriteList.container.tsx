import React from "react";
import { Box, Stack, Typography } from "@mui/material";
import MovieItem from "../MovieItem";
import { useRecoilValue } from "recoil";
import { favoritMovieState } from "@store/movieAndFavorit";

export default function MovieFavoriteList() {
  const movieList = useRecoilValue(favoritMovieState);

  return (
    <Stack justifyContent={"space-between"} display="flex" mt="70px">
      <Typography variant="h3">내 즐겨찾기</Typography>
      <Box>
        {movieList?.map((movie) => {
          return <MovieItem movie={movie} key={movie?.imdbID} />;
        })}
      </Box>
    </Stack>
  );
}
