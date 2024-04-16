import React from "react";
import Container from "../Container";
import { StyledButtonsWrapper, StyledTitle } from "./styles";
import Button from "../Buttons";
import Output from "../Output";

function App() {
  return (
    <Container>
      <StyledTitle>Timer</StyledTitle>
      <StyledButtonsWrapper>
        <Button number={1} text="1 sec" />
        <Button number={2} text="2 sec" />
        <Button number={3} text="3 sec" />
        <Button color="#ff00d8" text="Clear" />
      </StyledButtonsWrapper>
      <Output />
    </Container>
  );
}

export default App;
