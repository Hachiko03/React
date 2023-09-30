import { HelloWorld } from "./HelloWorld"
import {createRoot} from "react-dom/client"

const helloWorld = <HelloWorld />
const rootElement = document.getElementById("root")
const root = createRoot(rootElement)

root.render(helloWorld)