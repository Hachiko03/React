import { useState } from "react"

export default function Counter() {
  const [ counter, modCounter ] = useState(0);
  function aumentarNum() {
    modCounter(counter + 1)
  };
  return (
    <div>
      <h2>Contador {counter}</h2>
          <button onClick={aumentarNum}>Aumentar</button>
    </div>
  )
}