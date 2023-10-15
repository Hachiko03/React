import React from "react";

export default function UncontrolledLogin() {
  function submitData(event) {
    event.preventDefault();
      const formData = new FormData(event.target);
      /* Las ventajas son que es fácil de usar y te ahorras varias líneas de código y los datos
      que envía son fáciles de procesar en el servidor
      
      Desventajas, que cono es compatible con navegadores antiguos, no se pueden mandar datos en tiempo real
      ni una gran cantidad de datos, ya que hay un límite en la cantidad de datos que puede enviar*/
    const data = {
      username: formData.get("username"),
      password: formData.get("password"),
      remember: formData.get("remember") === 'on' ? true : false,
      };
      console.log(data)
    }
    /* Se puede acceder a la data del form usando el constructor FormData
    o bien buscandola el valor accediendo al DOM 

    function submitData(event) {
    event.preventDefault();

    const data = {
      username: event.target.elements.namedItem('username').value,
      password: event.target.elements.namedItem('password').value,
      remember: event.target.elements.namedItem('remember').checked,
      };
      console.log(data)
    }
    
    Estas formas son las más comúnes y las estandar para acceder a la API DOM. 
    Aunque también hay otras formas, como usar el ref de React, pero es recomendado no usarlo 
    en caso de no ser necesario.*/

  return (
    <form onSubmit={submitData}>
      <input name="username" />
      <input name="password" type="password" />
      <span>Remember</span>
      <input name="remember" type="checkbox" />
      <button> Login</button>
      <button type="reset">Reset</button>
    </form>
  );
}
