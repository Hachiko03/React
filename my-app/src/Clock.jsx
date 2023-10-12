import React, { useEffect, useState } from "react";

export default function Clock() {
  const [hora, modHora] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      modHora(new Date());
    });
  }, [1000]);
  return (
    <div>
      <h2>{hora.toLocaleTimeString()}</h2>
    </div>
  );
}
