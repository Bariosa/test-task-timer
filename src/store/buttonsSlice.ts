import { createSlice } from "@reduxjs/toolkit";
import { colors } from "../styles/variables";

interface IInitialState {
  buttonsArr: {
    number?: number;
    text: string;
    color?: string;
  }[];
}
const initialState: IInitialState = {
  buttonsArr: [
    { number: 1, text: "№1 (30 sec)" },
    { number: 2, text: "№2 (60 sec)" },
    { number: 3, text: "№3 (120 sec)" },
    { color: `${colors.dangerousColor}`, text: "Clear" },
  ],
};

const buttonsSlice = createSlice({
  name: "button",
  initialState,
  reducers: {},
});

export default buttonsSlice.reducer;
