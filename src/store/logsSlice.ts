import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  logsArr: number[];
}

const initialState: IInitialState = { logsArr: [] };

const logsSlice = createSlice({
  name: "logs",
  initialState,
  reducers: {
    addLog: (store, action) => {
      store.logsArr.push(action.payload);
    },
    clearLogs: (store) => {
      store.logsArr = [];
    },
  },
});

export const addLog = logsSlice.actions.addLog;
export const clearLogs = logsSlice.actions.clearLogs;

export default logsSlice.reducer;
