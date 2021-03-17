import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "./Constants";
import "./App.css";
import APODBox from "./APODBox";

function App() {
  const [aPODs, setAPODs] = useState([
    {
      copyright: "Donald Mitchell",
      date: "2021-03-17",
      explanation:
        "If you could stand on Venus -- what would you see?  Pictured is the view from Venera 13, a robotic Soviet lander which parachuted and air-braked down through the thick Venusian atmosphere in March of 1982. The desolate landscape it saw included flat rocks, vast empty terrain, and a featureless sky above Phoebe Regio near Venus' equator. On the lower left is the spacecraft's penetrometer used to make scientific measurements, while the light piece on the right is part of an ejected lens-cap.  Enduring temperatures near 450 degrees Celsius and pressures 75 times that on Earth, the hardened Venera spacecraft lasted only about two hours. Although data from Venera 13 was beamed across the inner Solar System almost 40 years ago, digital processing and merging of Venera's unusual images continues even today.  Recent analyses of infrared measurements taken by ESA's orbiting Venus Express spacecraft indicate that active volcanoes may currently exist on Venus.",
      hdurl: "https://apod.nasa.gov/apod/image/2103/Venus_Venera13_1705.jpg",
      media_type: "image",
      service_version: "v1",
      title: "The Surface of Venus from Venera 13",
      url: "https://apod.nasa.gov/apod/image/2103/Venus_Venera13_960.jpg",
    },
  ]);

  // useEffect(() => {
  //   axios
  //     .get(`${BASE_URL}?api_key=DEMO_KEY`)
  //     // .get(`${BASE_URL}?api_key=${API_KEY}&count=1`) // API with key
  //     .then((res) => {
  //       setAPODs(res.data);
  //       // console.log(res);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <div className="App">
      <APODBox singleAPOD={aPODs[0]} />
    </div>
  );
}

export default App;
