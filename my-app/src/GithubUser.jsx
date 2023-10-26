import React, { useEffect, useState } from "react";

export default function GithubUser({ username }) {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch(`https://api.github.com/users/${username}` )
      .then((response) => {
        return response.json()
      })
      .then((json) => {
        setData(json)
      })
  }, [username]);
  return (
    <div>
      {data && <h4>{data.name}</h4>}
      {data && <h4>{data.login}</h4>}
      {data && <img src={data.avatar_url}></img>}
    </div>
  );
}
