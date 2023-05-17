import useSWR from 'swr';

export const useFetcher = (path) => {
  const { data, error, isLoading } = useSWR(path);

  return {
    data,
    error,
    isLoading,
  };
};
