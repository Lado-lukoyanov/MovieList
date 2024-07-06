import { HeaderCard } from "../../entities/header-card/ui/header-card";

import { useGetHeaderCollections } from "../../shared/hooks/use-get-header-collection";

import styles from "./header.module.css";

export const Header = () => {
  const { data } = useGetHeaderCollections();

  return (
    <div className={styles.headerContent}>
      {data?.items.map(({ kinopoiskId, posterUrl, nameRu }) => (
        <HeaderCard key={kinopoiskId} imgUrl={posterUrl} title={nameRu} />
      ))}
    </div>
  );
};
