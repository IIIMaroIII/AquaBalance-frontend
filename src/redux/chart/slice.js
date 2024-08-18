import { createSlice } from "@reduxjs/toolkit";

const chartSlice = createSlice({
  name: 'chart',
  initialState: {
    showChart: false,
  },
  reducers: {
    setShowChart(state, { payload }) {
      state.showChart = payload;
    },
  },
});

export const { setShowChart } = chartSlice.actions;
export const chartReducer = chartSlice.reducer