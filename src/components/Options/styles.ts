import styled from "styled-components";
import { colors } from "../../styles/variables";

export const StyledOptionsWrapper = styled.div`
  width: 91%;
  min-height: 25px;
  margin: 10px auto;
  padding: 5px 5px;
  display: flex;
  justify-content: left;
  gap: 10px;
`;

export const StyledLabel = styled.label`
  align-items: center;
  display: flex;
  gap: 2px;
`;
export const StyledLabelText = styled.span`
  color: ${colors.primaryColor};
  font-size: 15px;
  text-transform: lowercase;
`;

export const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  height: 15px;
  width: 15px;
  cursor: pointer;
`;
