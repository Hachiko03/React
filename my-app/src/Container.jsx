import React, { useState } from "react";

export default function Container({ title, children }) {
  const [collapsed, setcollapsed] = useState(false);
  function showContent() {
    setcollapsed(t => !t);
  }
  return (
    <div className="container">
      <h1 onClick={showContent}>{title}</h1>
      {collapsed && <div>{ children }</div>}
    </div>
  );
}
