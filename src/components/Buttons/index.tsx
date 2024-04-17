import React, { FC } from "react";
import { StyledButton } from "./styles";
import { useAppDispatch } from "../../store";
import { addLogs, clearLogs } from "../../store/logsSlice";

interface IButton {
  text: string;
  number?: number;
  color?: string;
  onClick?: () => void;
}

const Button: FC<IButton> = ({ color, number, text }) => {
  const dispatch = useAppDispatch();
  const buttonHandler = () => {
    if (number) {
      dispatch(addLogs(number));
    } else {
      dispatch(clearLogs());
    }
  };

  return (
    <StyledButton onClick={buttonHandler} color={color}>
      {text}
    </StyledButton>
  );
};

export default Button;
