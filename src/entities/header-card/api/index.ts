import { movieClient } from "../../movie-card-header/api/movie-client";
import { MovieCollection } from "./types";

export const getBestMovieCollections = async (): Promise<MovieCollection> => {
  const { data } = await movieClient.get<MovieCollection>(`/collections?type=TOP_POPULAR_ALL`);

  return data;
};
