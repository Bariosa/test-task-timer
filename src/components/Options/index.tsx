import {
  StyledCheckbox,
  StyledLabel,
  StyledLabelText,
  StyledOptionsWrapper,
} from "./styles";
import { useAppDispatch } from "../../store";
import { sortLogs, sortReverseLogs } from "../../store/logsSlice";
import { useState } from "react";

const Options = () => {
  const dispatch = useAppDispatch();
  const [isSortAZ, setIsSortAZ] = useState(false);
  const [isSortZA, setIsSortZA] = useState(false);

  function handleSortAZ() {
    setIsSortZA(false);

    dispatch(sortLogs(!isSortAZ));
    setIsSortAZ(!isSortAZ);
  }

  function handleSortZA() {
    setIsSortAZ(false);

    dispatch(sortReverseLogs(!isSortZA));
    setIsSortZA(!isSortZA);
  }
  return (
    <StyledOptionsWrapper>
      <StyledLabel>
        <StyledCheckbox checked={isSortAZ} onChange={handleSortAZ} />
        <StyledLabelText>Sort (a-z)</StyledLabelText>
      </StyledLabel>

      <StyledLabel>
        <StyledCheckbox checked={isSortZA} onChange={handleSortZA} />
        <StyledLabelText>Sort (z-a)</StyledLabelText>
      </StyledLabel>
    </StyledOptionsWrapper>
  );
};

export default Options;
