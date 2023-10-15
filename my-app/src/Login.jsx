import React, { useState } from "react";

export default function Login({ onLogin }) {
  const [data, modData] = useState({
    username: "",
    password: "",
    remember: false,
  });
  function actualizacionDelInput(event) {
    const valor = event.target.value;
    const name = event.target.name;
    const checked = event.target.checked;
    const type = event.target.type;
    modData((data) => {
      return { ...data, [name]: type === "checkbox" ? checked : valor };
    });
  }

  function resetInputs() {
    modData({ username: "", password: "", remember: false });
  }

  function handleFormOnSubmitEvent(event) {
    event.preventDefault();
    /* Para evitar el comportamiento por defecto del elemento form, uso el metodo
    event.preventDefault() */
    onLogin(data);
  }
  return (
    <form onSubmit={handleFormOnSubmitEvent}>
      <input
        name="username"
        value={data.username}
        placeholder="username"
        onChange={actualizacionDelInput}
      />
      <input
        name="password"
        value={data.password}
        placeholder="password"
        onChange={actualizacionDelInput}
      />
      <span> Remember</span>
      <input
        name="remember"
        checked={data.remember}
        type="checkbox"
        onChange={actualizacionDelInput}
      />
      <button disabled={!data.username || !data.password}>Login</button>
      <button onClick={resetInputs}>Reset</button>
    </form>
  );
}