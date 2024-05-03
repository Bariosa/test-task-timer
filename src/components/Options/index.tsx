import { StyledOptionsWrapper } from "./styles";
import { useAppDispatch } from "../../store";
import { sortLogs, sortReverseLogs } from "../../store/logsSlice";
import { useState } from "react";
import Checkbox from "../ui/Checkbox";

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
      <Checkbox
        name="sort-a-z"
        text="Sort (a-z)"
        isChecked={isSortAZ}
        onChange={handleSortAZ}
      />

      <Checkbox
        name="sort-z-a"
        text="Sort (z-a)"
        isChecked={isSortZA}
        onChange={handleSortZA}
      />
    </StyledOptionsWrapper>
  );
};

export default Options;
