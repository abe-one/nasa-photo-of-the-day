import React from "react";

export default function CycleButton({ buttonText, eventFunction }) {
  return <button onClick={eventFunction}>{buttonText}</button>;
}
