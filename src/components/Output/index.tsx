import { StyledDeleteCross, StyledItem, StyledOutput } from "./styles";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store";

import Portal from "../Portal/Portal";
import Modal from "../Modal";
import { closeModal, openModal } from "../../store/modalSlice";
import { deleteLog } from "../../store/logsSlice";

const Output = () => {
  const logsArr = useAppSelector((globalStore) => globalStore.logs.logsArr);
  const dispatch = useAppDispatch();

  const [index, setIndex] = useState(0);

  const crossHandler = (index: number) => {
    dispatch(openModal());
    setIndex(index);
  };

  const removeLog = () => {
    dispatch(deleteLog(index));
    dispatch(closeModal());
  };
  return (
    <>
      <StyledOutput>
        {logsArr.map((number, index) => (
          <StyledItem key={index}>
            {number}
            <StyledDeleteCross onClick={() => crossHandler(index)}>
              &times;
            </StyledDeleteCross>
          </StyledItem>
        ))}
        <Portal>
          <Modal confirmFunc={removeLog} />
        </Portal>
      </StyledOutput>
    </>
  );
};
export default Output;
