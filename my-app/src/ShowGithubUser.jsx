import React from "react";
import { useParams } from "react-router";
import GithubUser from "./GithubUser";

export default function ShowGithubUser() {
  const { username="Hachiko03" } = useParams();
  return <GithubUser username={username}/>;
}
