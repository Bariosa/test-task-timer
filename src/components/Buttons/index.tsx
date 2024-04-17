import React, { FC } from "react";
import { StyledButton } from "./styles";
import { useDispatch } from "react-redux";
import { addLog, clearLogs } from "../../store/logsSlice";

interface IButton {
  text: string;
  number?: number;
  color?: string;
  onClick?: () => void;
}

const Button: FC<IButton> = ({ color, number, text }) => {
  const dispatch = useDispatch();

  function buttonHandler() {
    if (number) {
      dispatch(addLog(number));
    } else {
      dispatch(clearLogs());
    }
  }

  return (
    <StyledButton onClick={buttonHandler} color={color}>
      {text}
    </StyledButton>
  );
};

export default Button;
