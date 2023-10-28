import React from "react";
import { Route, Routes, useParams } from "react-router";
import { Welcome } from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";
import { Link, NavLink } from "react-router-dom";

export default function App() {
    const { username="Hachiko03" } = useParams();
  return (
    <div>
      <NavLink to="/">Home</NavLink> | <NavLink to="/counter">Counter</NavLink>{" "}
      | <NavLink to={`/users/${username}`}>Username</NavLink>
      <Routes>
        <Route path="/" element={<Welcome name={"Raúl"} />} />
        <Route path="counter" element={<Counter />} />
              <Route path="users/:username" element={ <ShowGithubUser /> }/>
              <Route path="*" element={<p>Not Found</p>}/>
      </Routes>
    </div>
  );
}
