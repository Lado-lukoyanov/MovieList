import { movieClient } from "./movie-client";
import { MoviesType, MovieResult } from "../../../shared/api/types";

export const getBestMovie = async (params: MoviesType): Promise<MovieResult> => {
  const { data } = await movieClient.get<MovieResult>(`/top?type=${params}`);

  return data;
};
