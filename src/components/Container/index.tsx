import { StyledContainer } from "./styles";
import React, { FC } from "react";

interface IContainer {
  children: React.ReactNode;
}

const Container: FC<IContainer> = ({ children }) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
