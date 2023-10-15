import React from "react";

export default function UncontrolledLogin() {
  return (
    <form>
      <input name="username" />
      <input name="passsword" type="password" />
      <input name="session" type="checkbox" />
      <button> Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
