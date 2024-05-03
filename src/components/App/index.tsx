import React from "react";
import Container from "../Container";
import { StyledButtonsWrapper, StyledTitle } from "./styles";

import Output from "../Output";

import { useAppSelector } from "../../store";
import Options from "../Options";
import Button from "../ui/Button";

function App() {
  const buttonsArr = useAppSelector(
    (globalStore) => globalStore.buttons.buttonsArr,
  );
  return (
    <Container>
      <StyledTitle>Timer</StyledTitle>
      <StyledButtonsWrapper>
        {buttonsArr.map((item, index) => (
          <Button
            key={index}
            number={item.number}
            text={item.text}
            color={item.color}
          />
        ))}
      </StyledButtonsWrapper>
      <Options />
      <Output />
    </Container>
  );
}

export default App;
