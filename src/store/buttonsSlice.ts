import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  buttonsArr: {
    number: number;
    text: string;
  }[];
}
const initialState: IInitialState = {
  buttonsArr: [
    { number: 1, text: "1 sec" },
    { number: 2, text: "2 sec" },
    { number: 3, text: "3 sec" },
  ],
};

const buttonsSlice = createSlice({
  name: "button",
  initialState,
  reducers: {},
});

export default buttonsSlice.reducer;
