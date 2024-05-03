import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const StyledButton = styled.button`
  width: 21%;
  height: 50px;
  font-size: 20px;
  border-radius: 5px;
  border: 2px ${(props) => props.color || colors.secondaryColor} solid;
  color: ${(props) => props.color || colors.secondaryColor};
  box-shadow: 1px 1px 5px darkgrey;
  background-color: transparent;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: ${colors.primaryColor};
    border-color: ${colors.primaryColor};
    min-width: 145px;
    height: 45px;
    font-size: 15px;
  }
`;
