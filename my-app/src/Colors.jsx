import React from "react";

const colors = ["Rojo", "Azul", "Verde", "Amarillo"];

export default function Colors() {
  return (
    <div>
      <ul>
        {colors.map((color) => (
          <li key={color}>{color}</li>
        ))}
      </ul>
    </div>
  );
}
