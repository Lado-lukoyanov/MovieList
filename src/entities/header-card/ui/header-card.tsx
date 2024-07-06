import styles from "./header-card.module.css";

import type { MouseEvent } from "react";

type HeaderCardProps = {
  imgUrl: string;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
};

export const HeaderCard = ({ imgUrl, onClick }: HeaderCardProps) => {
  return (
    <article onClick={onClick} className={styles.previewCard}>
      <img className={styles.image} src={imgUrl} alt="filmPoster" />
    </article>
  );
};
