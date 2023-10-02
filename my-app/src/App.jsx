import { Hello } from "./Hello";
import { Message } from "./Message";

export function App() {
    return (
      <div>
        <Hello />
        <Hello />
        <Hello />
        {/* Si, puedo usarlo más de una vez y si lo hago, este se repite, repitiendo a su vez  el componente Message */ }
        <Message />
        {/* Si, puedo renderizar el componente Message directamente dentro de el componente App . Carga su contenido sin necesidad
        de que cargue también el texto de "Hello World"*/}
      </div>
    );
  }
  export default App;