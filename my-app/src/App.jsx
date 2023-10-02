import { Hello } from "./Hello";

export function App() {
    return (
      <div>
        <Hello />
        <Hello />
        <Hello />
        {/* Si, puedo usarlo más de una vez y si lo hago, este se repite, repitiendo a su vez  el componente Message */}
      </div>
    );
  }
  export default App;