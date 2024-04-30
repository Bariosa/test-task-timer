import { createSlice } from "@reduxjs/toolkit";
import { colors } from "../styles/variables";

interface IInitialState {
  buttonsArr: {
    number?: number;
    text: string;
    color?: string;
    time?: number;
  }[];
}
const initialState: IInitialState = {
  buttonsArr: [
    { number: 1, text: "№1 (30 sec)", time: 30 },
    { number: 2, text: "№2 (60 sec)", time: 60 },
    { number: 3, text: "№3 (120 sec)", time: 120 },
    { color: `${colors.dangerousColor}`, text: "Clear" },
  ],
};

const buttonsSlice = createSlice({
  name: "button",
  initialState,
  reducers: {},
});

export default buttonsSlice.reducer;
