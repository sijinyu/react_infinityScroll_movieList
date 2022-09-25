class keys {
  #FILTER: string;
  #MOVIELIST: string;
  #FAVORITLIST: string;
  #FILTERLIST: string;

  constructor() {
    this.#FILTER = "filterState";
    this.#MOVIELIST = "movieListState";
    this.#FAVORITLIST = "favoritListState";
    this.#FILTERLIST = "filterListState";
  }

  getFilter() {
    return this.#FILTER;
  }
  getMovieList() {
    return this.#MOVIELIST;
  }
  getFavoritList() {
    return this.#FAVORITLIST;
  }
  getFilterList() {
    return this.#FILTERLIST;
  }
}

const movieAndfavoritKeysConstant = new keys();
export default movieAndfavoritKeysConstant;
