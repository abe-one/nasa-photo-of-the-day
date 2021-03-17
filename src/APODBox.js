import React, { useState, useEffect } from "react";
import axios from "axios";
import CycleButton from "./CycleButton";

/*


img click enlarge
<prev button>
<rand button>
<nxt button>
split into components


*/

export default function APODBox({ singleAPOD }) {
  return (
    <div className="container APOD-box">
      <div className="img-box">
        {<img src={singleAPOD.url} alt={singleAPOD.title} />}{" "}
        {singleAPOD.copyright && (
          <p className="copyright">Copyright {singleAPOD.copyright}</p>
        )}
        <h2>{singleAPOD.title}</h2>
        <h4>{singleAPOD.explanation}</h4>
        {/* <CycleButton buttonText="This Yesterday" eventFunction={null} />
        <CycleButton buttonText="Random Day" eventFunction={null} />
        <CycleButton buttonText="This Tomorrow" eventFunction={null} /> */}
      </div>
    </div>
  );
}
