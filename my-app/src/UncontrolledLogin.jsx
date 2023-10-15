import React from "react";

export default function UncontrolledLogin() {
  function submitData(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("remember") === 'on' ? true : false,
      };
      console.log(data)
    }
    /* Se puede acceder a la data del form usando el constructor FormData
    o bien buscandola el valor accediendo al DOM 

    function submitData(event) {
    event.preventDefault();

    const data = {
      username: event.target.elements.namedItem('username').value,
      password: event.target.elements.namedItem('password').value,
      remember: event.target.elements.namedItem('remember').checked,
      };
      console.log(data)
    }*/

  return (
    <form onSubmit={submitData}>
      <input name="username" />
      <input name="password" type="password" />
      <span>Remember</span>
      <input name="remember" type="checkbox" />
      <button> Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
