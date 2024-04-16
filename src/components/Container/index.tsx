import { StyledContainer } from "./styles";
import React from "react";

interface IContainer {
  children: React.ReactNode;
}

const Container = ({ children }: IContainer) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
