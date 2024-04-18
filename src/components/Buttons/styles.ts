import styled from "styled-components";

export const StyledButton = styled.button`
  width: 21%;
  height: 50px;
  font-size: 20px;
  border-radius: 5px;
  border: 2px ${(props) => props.color || "#ffb200"} solid;
  color: ${(props) => props.color || "#ffb200"};
  box-shadow: 1px 1px 5px darkgrey;
  background-color: transparent;
  transition: 0.5s;
  cursor: pointer;

  &:hover {
    color: #0082fe;
    border-color: #0082fe;
    min-width: 145px;
    height: 45px;
    font-size: 15px;
  }
`;
