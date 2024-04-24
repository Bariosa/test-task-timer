import {
  StyledModal,
  StyledModalButtons,
  StyledModalContent,
  StyledModalCross,
  StyledModalText,
} from "./style";
import React, { FC } from "react";
import Button from "../Buttons";
import { colors } from "../../styles/variables";
import { useAppDispatch, useAppSelector } from "../../store";
import { closeModal } from "../../store/modalSlice";

interface IModal {
  confirmFunc: () => void;
}

const Modal: FC<IModal> = ({ confirmFunc }) => {
  const isModalOpen = useAppSelector(
    (globalStore) => globalStore.modal.isModalOpen,
  );
  const dispatch = useAppDispatch();

  const closeHandler = () => {
    dispatch(closeModal());
  };

  return isModalOpen ? (
    <StyledModal>
      <StyledModalContent>
        <StyledModalText>Do you want to delete this timer?</StyledModalText>
        <StyledModalButtons>
          <Button text="Yes" color={colors.safeColor} onClick={confirmFunc} />
          <Button
            text="No"
            color={colors.dangerousColor}
            onClick={closeHandler}
          />
        </StyledModalButtons>
        <StyledModalCross onClick={closeHandler}>&times;</StyledModalCross>
      </StyledModalContent>
    </StyledModal>
  ) : null;
};

export default Modal;
