import React, { useEffect, useRef } from "react";

export default function FocusableInput() {
  const inputRef = useRef(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);
  return (
    <div className="border border-primary">
      <input ref={inputRef} />
    </div>
  );
}
