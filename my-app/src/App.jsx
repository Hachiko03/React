import { AlertClock } from "./AlertClock";
import { Hello } from "./Hello";
import { Message } from "./Message";
import { Welcome } from "./Welcome";

export function App() {
  const name = <strong>Rodolfo</strong>;
    return (
      <div>
        <Hello />
        <Hello />
        <Hello />
        {/* Si, puedo usarlo más de una vez y si lo hago, este se repite, repitiendo a su vez  el componente Message */ }
        <Message />
        {/* Si, puedo renderizar el componente Message directamente dentro de el componente App . Carga su contenido sin necesidad
        de que cargue también el texto de "Hello World"*/}
        <Welcome age={5} />
        {/* Si no paso ningún nombre al componente Welcome, este renderizara solo el texto "Welcome, !
        Pero si le doy un valor predeterminado, en este caso Raul, renderiza ese nombre" */}
        <Welcome name={ name } age={ 19 } />
        {/* Si el nombre es una expresión JSX la renderiza de igual forma, ya que admite como prop cualquier expresión javascrip o 
        JSX. Para pasarla, debemos introducir la expresión JSX dentro de {} */}
        <AlertClock/>
      </div>
    );
  }
  export default App;