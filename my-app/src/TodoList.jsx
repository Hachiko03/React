import React, { useState } from "react";

export default function TodoList() {
  const [newItem, actualizarNewItem] = useState("");
  const [items, actualizarItems] = useState([]);

  function showItem(event) {
    const item = event.target.value;
    actualizarNewItem(item);
  }
  function addItemIntoTheItemsArray() {
    actualizarItems((prevItems) => [...prevItems, newItem]);
    actualizarNewItem("");
  }
  function resetTheItemsArray() {
    actualizarItems([]);
  }
  function removeTheCurrentItem(index) {
    actualizarItems((prevItems) => prevItems.filter((item, i) => i !== index));
  }
  return (
    <div>
      <input value={newItem} onChange={showItem} />
      <button onClick={addItemIntoTheItemsArray}> Submit</button>
      <button onClick={resetTheItemsArray}>Reset</button>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{" "}
            <button onClick={() => removeTheCurrentItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
