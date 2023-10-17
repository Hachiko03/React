import React from "react";
import Color from "./Color";

const colors = [
  { id: 1, name: "Rojo" },
  { id: 2, name: "Azul" },
  { id: 3, name: "Verde" },
  { id: 4, name: "Amarillo" },
];

export default function Colors() {
  return (
    <div>
      <ul>
        {colors.map((colors) => (
          <Color key={colors.id} colors={colors}/>
        ))}
      </ul>
    </div>
  );
}
