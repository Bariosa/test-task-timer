import React from "react";
import { StyledButton } from "./styles";

interface IButton {
  text: string;
  number?: number;
  color?: string;
  onClick?: () => void;
}

const Button = ({ color, number, text }: IButton) => {
  return <StyledButton color={color}>{text}</StyledButton>;
};

export default Button;
