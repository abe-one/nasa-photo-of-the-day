import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "./Constants";
import "./App.css";
import APODBox from "./APODBox";

function App() {
  const [aPOD, setAPOD] = useState([]);
  const [random, setRandom] = useState(false);

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=DEMO_KEY&count=1`)
      // .get(`${BASE_URL}?api_key=${API_KEY}`) // API with key
      .then((res) => {
        setAPOD(res.data[0]);
        console.log(res + "this is the original res");
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  return <div className="App">{<APODBox aPOD={aPOD} />}</div>;
}

export default App;
