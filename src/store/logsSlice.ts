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
      store.logsArr.sort();
    },
    clearLogs: (store) => {
      store.logsArr = [];
    },
    deleteLog: (store, action) => {
      store.logsArr.splice(action.payload, 1);
    },
  },
});

export const addLog = logsSlice.actions.addLog;
export const clearLogs = logsSlice.actions.clearLogs;
export const deleteLog = logsSlice.actions.deleteLog;
export default logsSlice.reducer;
