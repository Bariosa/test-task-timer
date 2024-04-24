import { StyledDeleteCross, StyledItem, StyledOutput } from "./styles";
import React from "react";
import { useAppDispatch, useAppSelector } from "../../store";

import Portal from "../Portal/Portal";
import Modal from "../Modal";
import { openModal } from "../../store/modalSlice";

const Output = () => {
  const logsArr = useAppSelector((globalStore) => globalStore.logs.logsArr);
  const dispatch = useAppDispatch();

  const crossHandler = () => {
    dispatch(openModal());
  };

  return (
    <>
      <StyledOutput>
        {logsArr.map((number, index) => (
          <StyledItem key={index}>
            № {number}
            <StyledDeleteCross onClick={crossHandler}>
              &times;
            </StyledDeleteCross>
          </StyledItem>
        ))}
        <Portal>
          <Modal />
        </Portal>
      </StyledOutput>
    </>
  );
};
export default Output;
