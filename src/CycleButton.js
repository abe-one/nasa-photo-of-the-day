import React, { useState, useEffect } from "react";
import axios from "axios";

export default function CycleButton({ buttonText, eventFunction }) {
  return <button onClick={eventFunction}>{buttonText}</button>;
}
