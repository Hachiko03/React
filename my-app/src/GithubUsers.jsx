import React, { useEffect, useState } from "react";
import GithubUser from "./GithubUser";


export default function GithubUsers() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  
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
        {users.map(user => (
          <li key={user.id} onClick={()=>selectUsername(user.login)}>
            {user.login}
          </li>
        ))}
      </ul>
      {selectedUser && <GithubUser username={selectedUser} />}
    </div>
  );
}
