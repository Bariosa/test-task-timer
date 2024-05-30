import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { colors } from "../styles/variables";

interface IButton {
  number?: number;
  text: string;
  color?: string;
  time?: number;
  clickTime?: null | number;
}

interface IInitialState {
  buttonsArr: IButton[];
  currentTimer: any | null;
  timerQueue: IButton[];
}

const initialState: IInitialState = {
  buttonsArr: [
    { number: 1, text: "№1 (3 sec)", time: 3, clickTime: null },
    { number: 2, text: "№2 (5 sec)", time: 5, clickTime: null },
    { number: 3, text: "№3 (1 sec)", time: 1, clickTime: null },
    { color: `${colors.dangerousColor}`, text: "Clear" },
  ],
  currentTimer: null,
  timerQueue: [],
};

const buttonsSlice = createSlice({
  name: "button",
  initialState,
  reducers: {
    enqueueTimer: (state, action: PayloadAction<IButton>) => {
      state.timerQueue.push(action.payload);
    },
    dequeueTimer: (state) => {
      state.currentTimer = state.timerQueue.shift() || null;
    },
    clearTimers: (state) => {
      state.currentTimer = null;
      state.timerQueue = [];
    },
  },
});

export const { enqueueTimer, dequeueTimer, clearTimers } = buttonsSlice.actions;
export default buttonsSlice.reducer;
