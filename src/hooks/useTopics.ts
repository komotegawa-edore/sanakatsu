import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useTopics() {
  const { data, error, isLoading } = useSWR("/api/topics", fetcher);

  return {
    topics: data?.topics ?? [],
    isLoading,
    error,
  };
}
