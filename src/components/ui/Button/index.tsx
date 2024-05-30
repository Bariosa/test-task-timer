import React, { FC } from "react";
import { StyledButton } from "./styles";
import { clearLogs } from "../../../store/logsSlice";
import {
  enqueueTimer,
  dequeueTimer,
  clearTimers,
} from "../../../store/buttonsSlice";
import { useAppDispatch, useAppSelector } from "../../../store";

interface IButton {
  text: string;
  number?: number;
  color?: string;
  onClick?: () => void;
}

const Button: FC<IButton> = ({ color, number, text, onClick }) => {
  const dispatch = useAppDispatch();
  const currentTimer = useAppSelector((state) => state.buttons.currentTimer);

  function buttonHandler() {
    if (number) {
      dispatch(
        enqueueTimer({
          number,
          text,
          time: parseInt(text.slice(4).match(/\d+/)![0]),
          clickTime: Date.now(),
        }),
      );
      if (!currentTimer) {
        dispatch(dequeueTimer());
      }
    } else {
      dispatch(clearLogs());
      dispatch(clearTimers());
    }
  }

  return (
    <StyledButton onClick={onClick || buttonHandler} color={color}>
      {text}
    </StyledButton>
  );
};

export default Button;
