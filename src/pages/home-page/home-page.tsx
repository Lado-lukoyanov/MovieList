import { MoviesType } from "../../shared/api/types";
import { Header } from "../../widgets/header/header";
import { MovieList } from "../../widgets/movie-list/movie-list";

export const HomePage = () => {
  return (
    <>
      <Header />
      <section>
        <MovieList title="TOP-250" movieType={MoviesType.TOP_250} />
        <MovieList title="TOP-100" movieType={MoviesType.TOP_100} />
        <MovieList title="Ожидаемые" movieType={MoviesType.TOP_AWAIT} />
      </section>
    </>
  );
};
