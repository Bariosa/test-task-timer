import React, { FC } from "react";
import { StyledButton } from "./styles";
import { addLog, clearLogs } from "../../../store/logsSlice";
import { useAppDispatch } from "../../../store";

interface IButton {
  text: string;
  number?: number;
  color?: string;
  onClick?: () => void;
}

const Button: FC<IButton> = ({ color, number, text, onClick }) => {
  const dispatch = useAppDispatch();

  function buttonHandler() {
    if (number) {
      dispatch(addLog(number));
    } else {
      dispatch(clearLogs());
    }
  }

  return (
    <StyledButton onClick={onClick || buttonHandler} color={color}>
      {text}
    </StyledButton>
  );
};

export default Button;
