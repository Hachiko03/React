import React, { useEffect, useState } from "react";
import useGithubUser from "./useGithubUser";

export default function GithubUser({ username }) {
  const {data} = useGithubUser(username)
  return (
    <div>
      {data && <h4>{data.name}</h4>}
      {data && <h4>{data.login}</h4>}
      {data && <img src={data.avatar_url}></img>}
    </div>
  );
}
