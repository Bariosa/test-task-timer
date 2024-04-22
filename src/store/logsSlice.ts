import { createSlice } from "@reduxjs/toolkit";

interface IInitialState {
  logsArr: number[];
  prevArr: number[];
}

const initialState: IInitialState = { logsArr: [], prevArr: [] };

const logsSlice = createSlice({
  name: "logs",
  initialState,
  reducers: {
    addLog: (store, action) => {
      store.logsArr.push(action.payload);
      store.prevArr.push(action.payload);
    },
    clearLogs: (store) => {
      store.logsArr = [];
      store.prevArr = [];
    },
    deleteLog: (store, action) => {
      store.logsArr.splice(action.payload, 1);
      store.prevArr.splice(action.payload, 1);
    },
    sortLogs: (store, action) => {
      if (action.payload) {
        store.logsArr.sort((a, b) => a - b);
      } else {
        store.logsArr = store.prevArr;
      }
    },

    sortReverseLogs: (store, action) => {
      if (action.payload) {
        store.logsArr.sort((a, b) => b - a);
      } else {
        store.logsArr = store.prevArr;
      }
    },
  },
});

export const sortLogs = logsSlice.actions.sortLogs;
export const addLog = logsSlice.actions.addLog;
export const clearLogs = logsSlice.actions.clearLogs;
export const deleteLog = logsSlice.actions.deleteLog;
export const sortReverseLogs = logsSlice.actions.sortReverseLogs;

export default logsSlice.reducer;
