import React, { useEffect, useState } from "react";
import GithubUser from "./GithubUser";
import { Outlet, useParams } from "react-router";
import { NavLink } from "react-router-dom";

export default function GithubUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const { username } = useParams();

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  const selectUsername = (username) => {
    setSelectedUser(username);
  };

  return (
    <div>
      <ul>
        {users.map((user) => (
          <li key={user.id} onClick={() => selectUsername(user.login)}>
            {user.login}
          </li>
        ))}
      </ul>
      {<NavLink to={`/users/${selectedUser}`}>{selectedUser}</NavLink>}
      <Outlet />
    </div>
  );
}
