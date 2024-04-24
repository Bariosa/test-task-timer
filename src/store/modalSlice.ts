import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  isModalOpen: boolean;
}

const initialState: IInitialState = {
  isModalOpen: false,
};

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (store) => {
      store.isModalOpen = true;
    },
    closeModal: (store) => {
      store.isModalOpen = false;
    },
  },
});

export const closeModal = modalSlice.actions.closeModal;
export const openModal = modalSlice.actions.openModal;

export default modalSlice.reducer;
