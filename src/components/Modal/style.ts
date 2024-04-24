import styled from "styled-components";
import { colors } from "../../styles/variables";

export const StyledModal = styled.div`
  background-color: rgba(255, 255, 255, 0.5);
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const StyledModalContent = styled.div`
  position: relative;
  background-color: #000;
  border: 2px solid ${colors.dangerousColor};
  padding: 20px;
  width: 500px;
  height: 150px;
`;

export const StyledModalText = styled.p`
  color: ${colors.secondaryColor};
  font-size: 20px;
  text-align: center;
`;
export const StyledModalButtons = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 25px;
  justify-content: center;
`;

export const StyledModalCross = styled.span`
  color: ${colors.dangerousColor};
  cursor: pointer;
  font-size: 50px;
  font-weight: 700;
  position: absolute;
  top: -40px;
  right: -26px;
`;
