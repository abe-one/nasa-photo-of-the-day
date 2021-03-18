import React from "react";
import CycleButton from "./CycleButton";
import styled from "styled-components";

const StyledAPODBox = styled.div`
  color: ${(pr) => pr.theme.mainColor};
  background-color: ${(pr) => pr.theme.analogTint1};
  min-height: 100vh;

  button {
    color: ${(pr) => pr.theme.analogTint2};
    background-color: ${(pr) => pr.theme.mainColor};
    border: 1px solid ${(pr) => pr.theme.mainColor};
    border-radius: 5px;
    padding: 0.4rem 1.2rem;
    font-size: 1.8rem;
  }
`;

export default function APODBox({ aPOD, getRandomAPOD }) {
  if (!aPOD) return <h3>Loading</h3>;
  return (
    <StyledAPODBox className="container APOD-box">
      <div className="img-box">
        <img src={aPOD.url} alt={aPOD.title} />
      </div>
      {aPOD.copyright && (
        <p className="copyright">Copyright {aPOD.copyright}</p>
      )}
      <h2>{aPOD.title}</h2>
      <h4>{aPOD.explanation}</h4>
      {/* <CycleButton buttonText="This Yesterday" eventFunction={null} /> */}
      <CycleButton buttonText="Random Day" eventFunction={getRandomAPOD} />
      {/* <CycleButton buttonText="This Tomorrow" eventFunction={null} />  */}
    </StyledAPODBox>
  );
}
