import { HelloWorld } from "./HelloWorld"
import { Sum } from "./Sum";
import {Welcome} from "./Welcome"

export function App() {
    const name = <span>Rodolfo</span>;
    return (
        <div>
            <HelloWorld />
            <Welcome name={name}/>
            {/* Si no pasamos ninguna variable nuestro componente no carga ningun nombre */ }
            {/* En react se puede pasar cualquier expresión javascript como prop, por lo que 
            simplemente renderizará la expresión que le siempre que se ecuentre dentro de {} */}
            <Sum a={10} b={5} />
        </div>
    )
}
