import useSWR from "swr";

export default function useGithubUser(username) {
  if (username === null) {
    return {
      data: null,
      loading: false,
      error: null,
    };
  }
  const { data, error, mutate } = useSWR(
    `https://api.github.com/users/${username}`
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
