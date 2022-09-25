import React from "react";
import { Box, Typography } from "@mui/material";
import * as S from "./MovieItem.style";
import { MovieListModel } from "../MovieList/model";
import useMovieItem from "./hooks/useMovieItem";
import { AlertModal } from "src/components/AlertModal";
import useModal from "@common/hooks/useModal";

interface Props {
  movie: MovieListModel;
}
export default function MovieItem({ movie }: Props) {
  const { hanldeModalClick, isFavoriteMovie } = useMovieItem(movie);
  const { open, handleModal } = useModal();
  return (
    <>
      <AlertModal
        open={open}
        handleModal={handleModal}
        title="즐겨찾기"
        actionLabel={isFavoriteMovie(movie) ? "제거" : "추가"}
        handleSubmit={hanldeModalClick}
      />
      <S.Container onClick={handleModal}>
        <Box
          component="a"
          href="#"
          key={movie.imdbID}
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) =>
            e.preventDefault()
          }
        >
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
              <Typography>
                {isFavoriteMovie(movie) ? "⭐" + movie.Title : movie.Title}
              </Typography>
              <Typography>{movie.Year}</Typography>
              <Typography>{movie.Type}</Typography>
            </S.ContentSection>
          </S.innerContainer>
        </Box>
      </S.Container>
    </>
  );
}
