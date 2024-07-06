export enum MoviesType {
  TOP_250 = "TOP_250_BEST_FILMS",
  TOP_100 = "TOP_100_POPULAR_FILMS",
  TOP_AWAIT = "TOP_AWAIT_FILMS",
}

export type MovieResult = {
  pagesCount: number;
  films: Films[];
};

export type Films = {
  kinopoiskId: number;
  nameRu: string;
  nameEn: string;
  type: string;
  year: string;
  filmLength: string;
  countries: Countries[];
  genres: Genres[];
  rating: string;
  ratingVoteCount: number;
  posterUrl: string;
  posterUrlPreview: string;
  ratingChange: string;
  isRatingUp: string;
  isAfisha: number;
};

type Genres = {
  genre: string;
};

type Countries = {
  countries: string;
};
