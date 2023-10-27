import React, { useEffect, useMemo } from "react";

export default function FilteredList({ listOfObjects }) {
  const list = useMemo(()=>
    listOfObjects.filter((el, name, age, id) => el.age > 18),
    [listOfObjects]
  );
  return (
    <ul>
      {list.map((list) => (
        <li key={list.id}>{list.name} </li>
      ))}
    </ul>
  );
}
