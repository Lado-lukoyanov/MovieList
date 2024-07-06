import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { MovieCollection } from "../../entities/header-card/api/types";
import { getBestMovieCollections } from "../../entities/header-card/api";

type UseMovieReturnType = {
  data?: MovieCollection;
  isSuccess: boolean;
  isLoading: boolean;
  isError: boolean;
};

export const useGetHeaderCollections = (): UseMovieReturnType => {
  const { data, isSuccess, isLoading, isError } = useQuery({
    queryKey: ["movies"],
    queryFn: () => getBestMovieCollections(),
    placeholderData: keepPreviousData,
    staleTime: 0,
    gcTime: 0,
  });

  return { data, isSuccess, isLoading, isError };
};
