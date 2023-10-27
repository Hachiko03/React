import React from "react";
import useControlledForm from "./useControlledForm";

export default function ControlledForm() {
    const {data, showinput} = useControlledForm()
  return (
    <form>
      <input
        name="username"
        value={data.username}
        placeholder="username"
        onChange={showinput}
      />
      <input
        name="password"
        value={data.password}
        placeholder="password"
        onChange={showinput}
      />
    </form>
  );
}
