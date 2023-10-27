import { useState, useEffect } from "react";


export default function useGithubUser(username) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        setData(json);
      });
  }, [username]);
  return {
    data: data,
  };
}
