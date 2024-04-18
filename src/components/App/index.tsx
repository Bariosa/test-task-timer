import React from "react";
import Container from "../Container";
import { StyledButtonsWrapper, StyledTitle } from "./styles";
import Button from "../Buttons";
import Output from "../Output";
import { colors } from "../../styles/variables";
import { useAppSelector } from "../../store";

function App() {
  const buttonsArr = useAppSelector(
    (globalStore) => globalStore.buttons.buttonsArr,
  );
  return (
    <Container>
      <StyledTitle>Timer</StyledTitle>
      <StyledButtonsWrapper>
        {buttonsArr.map((item, index) => (
          <Button key={index} number={item.number} text={item.text} />
        ))}
        <Button color={colors.dangerousColor} text="Clear" />
      </StyledButtonsWrapper>
      <Output />
    </Container>
  );
}

export default App;
