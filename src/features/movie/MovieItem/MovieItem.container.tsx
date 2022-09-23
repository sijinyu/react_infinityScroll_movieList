import React from "react";
import { Box, Typography } from "@mui/material";
import * as S from "./MovieItem.style";
import { MovieListModel } from "../MovieList/model";

interface Props {
  movie: MovieListModel;
  handleClick: () => {};
}
export default function MovieItem({ movie }: Props) {
  return (
    <S.Container>
      <Box component="a" href="#" key={movie.imdbID}>
        <S.innerContainer direction="row" spacing={3}>
          <S.ImageSection>
            <Box
              component={"img"}
              loading="lazy"
              alt={movie.Title}
              src={movie.Poster}
            />
          </S.ImageSection>
          <S.ContentSection>
            <Typography>{movie.Title}</Typography>
            <Typography>{movie.Year}</Typography>
            <Typography>{movie.Type}</Typography>
          </S.ContentSection>
        </S.innerContainer>
      </Box>
    </S.Container>
  );
}
