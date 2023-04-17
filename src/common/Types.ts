export interface SearchInfo {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface FilmsInfo {
  Response: string;
  Search: Array<SearchInfo>;
  totalResults: string;
}

export interface FilmsDescription {
  Actors: string;
  Awards: string;
  BoxOffice: string;
  Country: string;
  DVD: string;
  Genre: string;
  Language: string;
  Metascore: string;
  Plot: string;
  Poster: string;
  Rated: string;
  Runtime: string;
  Year: string;
  Title: string;
  imdbID: string;
}
