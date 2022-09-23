export interface MoviesResponseModel {
  Search: [
    {
      Title: string;
      Year: string;
      imdbID: string;
      Type: string;
      Poster: string;
    }
  ];
  totalResults: number;
  Response: string;
  Error: string;
}

export interface MovieListModel {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}
