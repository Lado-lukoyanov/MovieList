import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { MovieResult, MoviesType } from "../api/types";
import { getBestMovie } from "../../entities/movie-card-header/api";

type UseMovieReturnType = {
  data?: MovieResult;
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
};

export const useGetMovie = (params: MoviesType): UseMovieReturnType => {
  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["movies", params],
    queryFn: () => getBestMovie(params),
    placeholderData: keepPreviousData,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isSuccess, isLoading, isError };
};
