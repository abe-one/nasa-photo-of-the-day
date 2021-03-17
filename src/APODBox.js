import React, { useState, useEffect } from "react";
import axios from "axios";
import CycleButton from "./CycleButton";

/*
img click enlarge
<prev button>
<rand button>
<nxt button>

*/

export default function APODBox({ aPOD }) {
  if (!aPOD) return <h3>Loading</h3>;
  return (
    <div className="container APOD-box">
      <div className="img-box">
        <img src={aPOD.url} alt={aPOD.title} />
      </div>
      {aPOD.copyright && (
        <p className="copyright">Copyright {aPOD.copyright}</p>
      )}
      <h2>{aPOD.title}</h2>
      <h4>{aPOD.explanation}</h4>
      {/* <CycleButton buttonText="This Yesterday" eventFunction={null} />
      <CycleButton buttonText="Random Day" eventFunction={null} />
      <CycleButton buttonText="This Tomorrow" eventFunction={null} />  */}
    </div>
  );
}
