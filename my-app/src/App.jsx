import React from "react";
import { Route, Routes } from "react-router";
import { Welcome } from "./Welcome";
import Counter from "./Counter";
import ShowGithubUser from "./ShowGithubUser";


export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Welcome name={"Raúl"} />} />
              <Route path="counter" element={ <Counter /> } />
              <Route path="users/:username" element={<ShowGithubUser/>}></Route>
      </Routes>
    </div>
  );
}
