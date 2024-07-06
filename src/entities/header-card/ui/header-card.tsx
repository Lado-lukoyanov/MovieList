import styles from "./header-card.module.css";

type HeaderCardProps = {
  imgUrl: string;
  title: string;
};

export const HeaderCard = ({ imgUrl, title }: HeaderCardProps) => {
  return (
    <article className={styles.headerCard}>
      <img className={styles.image} src={imgUrl} alt="filmPoster" />
      <h2>{title}</h2>
    </article>
  );
};
