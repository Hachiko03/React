import { useState } from "react"

export default function Counter({i, aumentar}) {
  const [ counter, modCounter ] = useState(i);
  function aumentarNum() {
    modCounter(counter + aumentar)
  };
  return (
    <div>
      <h2>Contador {counter}</h2>
          <button onClick={aumentarNum}>Aumentar</button>
    </div>
  )
}
/* En este caso pasamos un valor inmediato dentro de la función que react nos da en su useState,
esto no nos causará problemas aqui porque nuestro contador no depende de su valor anterior. En caso 
de que nuestro counter si dependiera de nuestro valor anterior o necesitase multiples actualizaciones
a la vez, tendríamos que pasar una función */