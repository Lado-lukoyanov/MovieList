import styles from "./movie-card.module.css";

type MovieProps = {
  nameRu: string;
  year: string;
  filmLength: string;
  posterUrlPreview: string;
};

export const MovieCard = ({ nameRu, year, filmLength, posterUrlPreview }: MovieProps) => {
  return (
    <div className={styles.movieCard}>
      <div className={styles.imageContent}>
        <img className={styles.image} src={posterUrlPreview} alt="filmPoster" />
        <div className={styles.titleContent}>
          <h1>{nameRu}</h1>
          <p>Год:{year}</p>
          <p>Продолжительность: {filmLength} часов</p>
        </div>
      </div>
    </div>
  );
};
