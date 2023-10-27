import { useState } from "react";

export default function useControlledForm() {
  const [data, modData] = useState({
    username: "",
    password: "",
  });
  function actualizacionDelInput(event) {
    const valor = event.target.value;
    const name = event.target.name;
    
    modData((data) => {
      return { ...data, [name]: valor};
    });
  }

  function resetInputs() {
    modData({ username: "", password: ""});
  }

  function handleLogginClick(event) {
    event.preventDefault();
  }

  function handleFormOnSubmitEvent(event) {
    event.preventDefault();
    /* Para evitar el comportamiento por defecto del elemento form, uso el metodo
        event.preventDefault() */
    handleLogginClick();
  }
  return {
    data: data,
    showinput: actualizacionDelInput,
    reset: resetInputs,
    submit: handleFormOnSubmitEvent,
  };
}
