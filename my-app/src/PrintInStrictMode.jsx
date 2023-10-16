import React, { useEffect, useRef } from "react";

export default function PrintInStrictMode() {
  const mountedRef = useRef(true);
  useEffect(() => {
    if (mountedRef.current) {
      mountedRef.current = false;
      console.log("componente montado por primera vez");
    } else {
      console.log("el componente se ha vuelto a montar");
    }
  }, []);
  return (
    <div>
      <h4 ref={mountedRef}>Prints in StrictMode</h4>
    </div>
  );
}
