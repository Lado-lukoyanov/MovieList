import { MoviesType } from "../../shared/api/types";
import { useGetMovie } from "../../shared/hooks";
import { MovieCard } from "../../entities/movie-card-header/ui/movie-card";

import styles from "./movie-list.module.css";

type MovieListProps = {
  movieType: MoviesType;
  title: string;
};

export const MovieList = ({ movieType, title }: MovieListProps) => {
  const { data } = useGetMovie(movieType);

  return (
    <div className={styles.movieContentContainer}>
      <div className={styles.title}>
        <h2>{title}</h2>
        <h2>Посмотреть все</h2>
      </div>
      <div className={styles.movieContent}>
        {data?.films.slice(0, 4).map(({ kinopoiskId, nameRu, year, filmLength, posterUrlPreview }) => (
          <MovieCard
            key={kinopoiskId}
            posterUrlPreview={posterUrlPreview}
            nameRu={nameRu}
            year={year}
            filmLength={filmLength}
          ></MovieCard>
        ))}
      </div>
    </div>
  );
};
