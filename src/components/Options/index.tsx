import {
  StyledCheckbox,
  StyledLabel,
  StyledLabelText,
  StyledOptionsWrapper,
} from "./styles";
import { useAppDispatch } from "../../store";
import { sortLogs } from "../../store/logsSlice";
import { useState } from "react";

const Options = () => {
  const dispatch = useAppDispatch();
  const [isChecked, setIsChecked] = useState(false);

  function sortHandler() {
    if (!isChecked) {
      dispatch(sortLogs());
    }
  }

  function handleCheckboxChange() {
    setIsChecked(!isChecked);
  }

  return (
    <StyledOptionsWrapper>
      <StyledLabel onClick={sortHandler}>
        <StyledCheckbox checked={isChecked} onChange={handleCheckboxChange} />
        <StyledLabelText>Sort</StyledLabelText>
      </StyledLabel>

      <StyledLabel>
        <StyledCheckbox />
        <StyledLabelText>Add</StyledLabelText>
      </StyledLabel>

      <StyledLabel>
        <StyledCheckbox />
        <StyledLabelText>Delete</StyledLabelText>
      </StyledLabel>
    </StyledOptionsWrapper>
  );
};

export default Options;
