import React, { useState, useEffect } from "react";
import axios from "axios";
import { BASE_URL, API_KEY } from "../Constants";
import "../Styling/App.css";
import styled from "styled-components";
import APODBox from "./APODBox";

function App() {
  const [aPOD, setAPOD] = useState([]);
  const [random, setRandom] = useState(0);
  // const [date, setDate] = useState(""); //Create date options

  const getRandomAPOD = () => {
    random === 1 ? setRandom(2) : setRandom(1); //Is this janky or clever???????
  };

  const PageContainer = styled.div`
    background-color: ${(pr) => pr.theme.analogTint1};
    display: flex;
    flex-direction: column;
    align-items: center;
  `;

  useEffect(() => {
    axios
      .get(`${BASE_URL}?api_key=${API_KEY}${random ? "&count=1" : ""}`)
      .then((res) => {
        Array.isArray(res.data) ? setAPOD(res.data[0]) : setAPOD(res.data);
        console.log(res + "this is the original res");
      })
      .catch((err) => {
        alert(err);
      })
      .finally();
  }, [random]);

  return (
    <PageContainer className="App">
      {<APODBox aPOD={aPOD} getRandomAPOD={getRandomAPOD} />}
    </PageContainer>
  );
}

export default App;