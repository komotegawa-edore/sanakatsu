import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((r) => r.json());

export function useNewsArticles(topicId?: number) {
  const params = new URLSearchParams();
  if (topicId) params.set("topicId", String(topicId));

  const { data, error, isLoading, mutate } = useSWR(
    `/api/news?${params.toString()}`,
    fetcher
  );

  return {
    articles: data?.articles ?? [],
    total: data?.total ?? 0,
    isLoading,
    error,
    mutate,
  };
}
