import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

export default function Counter({ i, aumentar }) {
  const [contador, modCounter] = useState(i);
  function aumentarNum() {
    modCounter(contador + aumentar);
  }
  return (
    <div>
      <CounterDisplay contador={contador}/>
      <button onClick={aumentarNum}>Aumentar</button>
    </div>
  );
}
/* En este caso pasamos un valor inmediato dentro de la función que react nos da en su useState,
esto no nos causará problemas aqui porque nuestro contador no depende de su valor anterior. En caso 
de que nuestro counter si dependiera de nuestro valor anterior o necesitase multiples actualizaciones
a la vez, tendríamos que pasar una función */
