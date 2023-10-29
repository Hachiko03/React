import React from "react";
import { Route, Routes, useParams } from "react-router";
import { Welcome } from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import { NavLink } from "react-router-dom";
import GithubUsers from "./GithubUsers";

export default function App() {
  const { username = "Hachiko03" } = useParams();
  return (
    <div>
      <NavLink to="/">Home</NavLink> | <NavLink to="/counter">Counter</NavLink>{" "}
      | <NavLink to={`/users`}>Users</NavLink>
      <Routes>
        <Route path="/" element={<Welcome name={"Raúl"} />} />
        <Route path="counter" element={<Counter />} />
        <Route path="users" element={ <GithubUsers /> }>
          <Route index element={<p>Add a user and select it</p>} />
          <Route path=":username" element={<ShowGithubUser />} />
        </Route>
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </div>
  );
}
