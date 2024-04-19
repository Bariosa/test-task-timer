import styled from "styled-components";
import { colors } from "../../styles/variables";

export const StyledOutput = styled.ul`
  width: 91%;
  min-height: 200px;
  margin: 10px auto;
  padding: 10px 10px;
  font-size: 20px;
  border-radius: 5px;
  border: 2px ${colors.primaryColor} solid;
  box-shadow: 1px 1px 5px darkgrey;
`;

export const StyledItem = styled.li`
  font-size: 20px;
  color: ${colors.textColor};
  text-shadow: 1px 1px 5px ${colors.primaryColor};
  margin-bottom: 15px;
`;

export const StyledDeleteCross = styled.span`
  color: ${colors.dangerousColor};
  cursor: pointer;
  margin-left: 10px;
`;
