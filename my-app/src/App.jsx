import React, { useContext, useState } from "react";
import { AlertClock } from "./AlertClock";
import Clock from "./Clock";
import Counter from "./Counter";
import FocusableInput from "./FocusableInput";
import { Hello } from "./Hello";
import InteractiveWelcome from "./InteractiveWelcome";
import Login from "./Login";
import { Message } from "./Message";
import MouseClicker from "./MouseClicker";
import MultiButton from "./MultiButton";
import UncontrolledLogin from "./UncontrolledLogin";
import { Welcome } from "./Welcome";
import PrintInStrictMode from "./PrintInStrictMode";
import Colors from "./Colors";
import TodoList from "./TodoList";
import "bootstrap/dist/css/bootstrap.min.css";
/* import '../scss/styles.scss' */
import * as bootstrap from "bootstrap";
import Container from "./Container";
import { LanguageContext } from "./LanguageContext";
import GithubUser from "./GithubUser";
import GithubUsers from "./GithubUsers";
import ControlledForm from "./ControlledForm";

export function App() {
  const name = <strong>Rodolfo</strong>;
  const [language, setLanguage] = useState("en");
  function changeLanguage(event) {
    setLanguage(event.target.value);
    console.log(language);
  }
  return (
    <Container title={"My-app"}>
      <Hello />
      <Hello />
      <Hello />
      {/* Si, puedo usarlo más de una vez y si lo hago, este se repite, repitiendo a su vez  el componente Message */}
      <Message />
      {/* Si, puedo renderizar el componente Message directamente dentro de el componente App . Carga su contenido sin necesidad
        de que cargue también el texto de "Hello World"*/}
      <Welcome age={5} />
      {/* Si no paso ningún nombre al componente Welcome, este renderizara solo el texto "Welcome, !
        Pero si le doy un valor predeterminado, en este caso Raul, renderiza ese nombre" */}
      <Welcome name={name} age={19} />
      {/* Si el nombre es una expresión JSX la renderiza de igual forma, ya que admite como prop cualquier expresión javascrip o 
        JSX. Para pasarla, debemos introducir la expresión JSX dentro de {} */}
      <AlertClock
        onClick={function giveLocalDate() {
          const hour = new Date();
          alert(`La hora actual es ${hour.toLocaleTimeString()}`);
        }}
      />
      <Counter i={10} aumentar={2} reducir={5} />
      <div>
        <select value={language} onChange={changeLanguage}>
          <option value={"en"}>English</option>
          <option value={"es"}>Español</option>
        </select>
        {/* Sigue mostrando el texto en inglés, por que es el valor por defecto que tiene el context
        y es el valor que se recibe cuando un componente que no tiene Provider. Pero ya no cambia de idioma
        al español*/}
        <Clock />
      </div>
      <MouseClicker />

      <MultiButton />

      <InteractiveWelcome />
      <Login
        onLogin={(data) => {
          console.log(data);
        }}
      />
      <UncontrolledLogin />
      <FocusableInput />
      <React.StrictMode>
        <PrintInStrictMode />
      </React.StrictMode>
      <Colors />
      <TodoList />
      <GithubUser username={"Hachiko03"} />
      <GithubUsers />
      <ControlledForm/>
    </Container>
  );
}
export default App;
