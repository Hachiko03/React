import { useEffect, useRef, useState } from "react";
import CounterDisplay from "./CounterDisplay";

export default function Counter() {
  function useCounter(i = 0, aumentar = 1, reducir = 1) {
    const [contador, modCounter] = useState(i);

    useEffect(() => {
      console.log(contador);
    }, [contador]);
    function aumentarNum() {
      modCounter(contador + aumentar);
    }
    function disminuirNum() {
      modCounter(contador - reducir);
    }
    function resetearNum() {
      modCounter(i);
    }

    const refUpDownOfCounter = useRef("");
    const prevrefUpDownOfCounter = useRef("");

    useEffect(() => {
      if (contador > i) {
        refUpDownOfCounter.current = "up";
      } else if (contador < i) {
        refUpDownOfCounter.current = "down";
      }

      if (refUpDownOfCounter.current !== prevrefUpDownOfCounter.current) {
        console.log(refUpDownOfCounter.current);
        prevrefUpDownOfCounter.current = refUpDownOfCounter.current;
      }
    }, [contador, i]);
    return {
      contador: contador,
      aumentar: aumentarNum,
      disminuir: disminuirNum,
      resetear: resetearNum,
    };
  }

  const MyStyle = {
    backgroundColor: "lightgreen",
  };
  const { contador, aumentar, disminuir, resetear } = useCounter();
  return (
    <div style={MyStyle}>
      <CounterDisplay contador={contador} />
      <button onClick={aumentar}>Aumentar</button>
      <button onClick={disminuir}>Disminuir</button>
      <button onClick={resetear}>Reset</button>
    </div>
  );
}
/* En este caso pasamos un valor inmediato dentro de la función que react nos da en su useState,
esto no nos causará problemas aqui porque nuestro contador no depende de su valor anterior. En caso 
de que nuestro counter si dependiera de nuestro valor anterior o necesitase multiples actualizaciones
a la vez, tendríamos que pasar una función */
