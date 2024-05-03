import styled from "styled-components";
import { colors } from "../../../styles/variables";

export const Label = styled.label`
  align-items: center;
  display: flex;
  gap: 2px;
  cursor: pointer;
`;

export const Text = styled.span`
  color: ${colors.primaryColor};
  font-size: 15px;
  text-transform: lowercase;
  margin-left: 5px;
`;

export const CustomCheckbox = styled.span`
  height: 23px;
  width: 23px;
  border: 2px solid ${colors.primaryColor};
  box-shadow: 1px 1px 6px darkgrey;
  border-radius: 5px;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    display: none;
    background-color: ${colors.secondaryColor};
    height: 2px;
    width: 10px;
    top: 9px;
    left: 3px;
    transform: rotate(50deg);
  }

  &::after {
    content: "";
    position: absolute;
    display: none;
    background-color: ${colors.secondaryColor};
    height: 2px;
    width: 8px;
    top: 10px;
    left: 9px;
    transform: rotate(-50deg);
  }
`;

export const Input = styled.input`
  display: none;
  &:checked + ${CustomCheckbox}::before, &:checked + ${CustomCheckbox}::after {
    display: block;
  }
`;
