import { StyledItem, StyledOutput } from "./styles";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { deleteLog } from "../../store/logsSlice";

const Output = () => {
  const logs = useAppSelector((globalStore) => globalStore.logs.logsArr);
  const dispatch = useAppDispatch();

  function logHandler(index: number) {
    dispatch(deleteLog(index));
  }

  return (
    <StyledOutput>
      {logs.map((number, index) => (
        <StyledItem key={index}>
          № {number}
          <span onClick={() => logHandler(index)} className={"delete"}>
            &times;
          </span>
        </StyledItem>
      ))}
    </StyledOutput>
  );
};
export default Output;
