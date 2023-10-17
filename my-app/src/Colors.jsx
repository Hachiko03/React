import React from "react";

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
          <li key={colors.id}>{colors.name}</li>
        ))}
      </ul>
    </div>
  );
}
