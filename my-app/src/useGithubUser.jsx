import { useState, useEffect } from "react";

export default function useGithubUser(username) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setLoading(false);
        setData(json);
      })
      .catch((error) => {
        setError(error);
      });
  }, [username]);
  return {
      data: data,
      loading: loading,
      error: error,
  };
}
