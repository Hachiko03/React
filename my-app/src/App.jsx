import { HelloWorld } from "./HelloWorld"
import {Welcome} from "./Welcome"

export function App() {
    return (
        <div>
            <HelloWorld />
            <Welcome />
            {/* Si no pasamos ninguna variable nuestro componente no carga ningun nombre */}
        </div>
    )
}
