import { MovieListModel } from "./../../../features/movie/MovieList/model/index";
import { recoilPersist } from "recoil-persist";

import { atom, selector } from "recoil";
import movieAndfavoritKeysConstant from "./constans";

const { persistAtom } = recoilPersist();

export const filterState = atom({
  key: movieAndfavoritKeysConstant.getFilter(),
  default: "/",
});

export const movieListState = atom<MovieListModel[]>({
  key: movieAndfavoritKeysConstant.getMovieList(),
  default: [],
});
export const favoritMovieState = atom<MovieListModel[]>({
  key: movieAndfavoritKeysConstant.getFavoritList(),
  default: [],
  effects_UNSTABLE: [persistAtom],
});

export const filterListState = selector({
  key: movieAndfavoritKeysConstant.getFilterList(),
  get: ({ get }) => {
    const filter = get(filterState);
    const movieList = get(movieListState);
    const favoritMovieList = get(favoritMovieState);

    switch (filter) {
      case "/":
        return movieList;
      case "/favorite":
        return favoritMovieList;
    }
  },
});
