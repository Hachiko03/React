import { useCallback, useEffect, useRef, useState } from "react";
export default function useCounter(i = 0, aumentar = 1, reducir = 1) {
  const [contador, modCounter] = useState(i);

  useEffect(() => {
    console.log(contador);
  }, [contador]);
  const aumentarNum = useCallback(
    function aumentarNum() {
      modCounter(contador + aumentar);
    },
    [contador, aumentar]
  );
  const disminuirNum = useCallback(function disminuirNum() {
    modCounter(contador - reducir);
  },[contador,reducir])
  const resetearNum = useCallback(function resetearNum() {
    modCounter(i);
  },[contador,i])

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
