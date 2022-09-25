import React from "react";
import { MovieListModel } from "./../../MovieList/model/index";
import { useRecoilState } from "recoil";
import { favoritMovieState } from "src/store/movieAndFavorit";

const useMovieItem = (movie: MovieListModel) => {
  //recoil store에 저장된 즐겨찾기 리스트 가져오기
  const [favoriteMovieList, setFavoriteMovieList] =
    useRecoilState(favoritMovieState);

  //즐겨찾기 리스트에 현재 영화 추가
  const hanldeFavoritAdd = () => {
    setFavoriteMovieList((oldFavoriteMovieList) => [
      ...oldFavoriteMovieList,
      movie,
    ]);
  };

  //즐겨찾기 리스트내에서 현재 영화 제거
  const handleFavoritDelete = () => {
    setFavoriteMovieList((oldFavoriteMovieList) => [
      ...oldFavoriteMovieList.filter((oldMovie) => oldMovie !== movie),
    ]);
  };

  //현재 영화가 즐겨찾기 리스트에 추가 되어있는 상태인지 확인하는 함수
  const isFavoriteMovie = (movie: MovieListModel) =>
    favoriteMovieList.some(
      (favoritMovie) => favoritMovie.imdbID === movie.imdbID
    );

  // 모달 클릭 이벤트
  const hanldeModalClick = () => {
    if (isFavoriteMovie(movie)) {
      handleFavoritDelete();
    } else {
      hanldeFavoritAdd();
    }
  };

  return {
    hanldeFavoritAdd,
    handleFavoritDelete,
    hanldeModalClick,
    isFavoriteMovie,
  };
};

export default useMovieItem;
