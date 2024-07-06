import { useState } from "react";

import { useGetHeaderCollections } from "../../shared/hooks/use-get-header-collection";

import styles from "./header.module.css";
import { Films } from "../../shared/api/types";
import { HeaderCard } from "../../entities/header-card/ui/header-card";

export const Header = () => {
  const [movie, setMovie] = useState<Films | null>(null);
  const { data } = useGetHeaderCollections();

  const onSelectImage = (data: Films) => {
    setMovie(data);
  };

  return (
    <header className={styles.previewContent}>
      <section className={styles.info}>
        <p>Главная</p>
        <p>Поиск</p>
        <p>Релиз</p>
      </section>
      <section className={styles.imagePreview}>
        <img className={styles.image} src={movie?.posterUrl} alt="moviePoster" />
        <article className={styles.previewTitle}>
          <h1>{movie?.nameRu}</h1>
          <p>{movie?.description}</p>
          <p>{movie?.year}</p>
          <p>подробнее</p>
        </article>
      </section>
      <div className={styles.list}>
        {data?.items.slice(0, 10).map((data) => (
          <HeaderCard onClick={() => onSelectImage(data)} key={data.kinopoiskId} imgUrl={data.posterUrl} />
        ))}
      </div>
    </header>
  );
};
