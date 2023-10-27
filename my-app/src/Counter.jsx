import CounterDisplay from "./CounterDisplay";
import useCounter from "./useCounter";

export default function Counter() {
  const { contador, aumentar, disminuir, resetear } = useCounter();
  const MyStyle = {
    backgroundColor: "lightgreen",
  };
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
