import { StyledItem, StyledOutput } from "./styles";
import React from "react";
import { useAppSelector } from "../../store";

const Output = () => {
  const logs = useAppSelector((globalStore) => globalStore.logs.logsArr);

  return (
    <StyledOutput>
      {logs.map((number, index) => (
        <StyledItem key={index}>№ {number}</StyledItem>
      ))}
    </StyledOutput>
  );
};
export default Output;
