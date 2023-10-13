import React from "react";

export default function MultiButton() {
  function printTheNameProp(event) {
    console.log(event.target.name);
  }
  return (
    <div>
      <button name="one" onClick={printTheNameProp}>
        1
      </button>
      <button name="two" onClick={printTheNameProp}>
        2
      </button>
      <button name="three" onClick={printTheNameProp}>
        3
      </button>
    </div>
  );
}
