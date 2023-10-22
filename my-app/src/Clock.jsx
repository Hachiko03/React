import React, { useEffect, useState } from "react";
import classes from "./Clock.module.scss"

export default function Clock() {
  const [hora, modHora] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      modHora(new Date());
    });
  }, [1000]);
  return (
    <div className={classes.clock}>
      <h2>{hora.toLocaleTimeString()}</h2>
    </div>
  );
}
