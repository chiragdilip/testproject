import React, { useState } from "react";
export function Input({ onSubmitHandler, lableText }) {
  const [value, setValue] = useState(0);

  return (
    <>
      <label htmlFor="">{lableText}</label>
      <input
        type="number"
        min="0"
        max="100"
        onChange={(e) => setValue(e.target.value)}
        value={value}
      />
      <button onClick={() => onSubmitHandler(value)}>Submit</button>
    </>
  );
}
