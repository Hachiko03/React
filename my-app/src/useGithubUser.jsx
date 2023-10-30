import useSWR from "swr";

const fetcher = (url) => fetch(url).then((response) => response.json());

export default function useGithubUser(username) {
  if (username === null) {
    return {
      data: null,
      loading: false,
      error: null,
    };
  }
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`,
    fetcher
  );

  function refetch() {
    mutate();
  }
  return {
    data: data,
    loading: !data && !error,
    error: error,
    refetch: refetch,
  };
}
