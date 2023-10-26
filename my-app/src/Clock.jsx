import React, { useContext, useEffect, useState } from "react";
import classes from "./Clock.module.scss"
import { LanguageContext } from "./LanguageContext";

export default function Clock() {
  const language = useContext(LanguageContext);
  const [hora, modHora] = useState(new Date());
  useEffect(() => {
    setInterval(() => {
      modHora(new Date());
    });
  }, [1000]);
  return (
    <div className={classes.clock}>
      <h2> {language === "en" ? "Time:" : "Hora:"} {hora.toLocaleTimeString()}</h2>
    </div>
  );
}
