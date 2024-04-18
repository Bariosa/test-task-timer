import styled from "styled-components";
import { colors } from "../../styles/variables";

export const StyledContainer = styled.div`
  max-width: 1000px;
  margin: 50px auto;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.8);
  box-shadow: 1px 1px 5px ${colors.primaryColor};
  color: ${colors.textColor};
`;
