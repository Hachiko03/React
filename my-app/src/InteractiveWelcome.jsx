import React, { useState } from "react";
import { Welcome } from "./Welcome";

export default function InteractiveWelcome() {

  const [name, ModName] = useState("")
  function exportNewName(event) {
    const newName = event.target.value
    ModName(newName)
  }
  return (
    <div>
      <input value={name} onChange={exportNewName}/>
      <Welcome name={name} />
    </div>
  );
}
