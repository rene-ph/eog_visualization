import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  metrics: [],
  selectedMetrics: [],
};

export const metricsSlice = createSlice({
  name: 'metrics',
  initialState,
  reducers: {
    add: (state, action) => {
      state.metrics = action.payload;
    },
    addSelectedMetrics: (state, action) => {
      state.selectedMetrics = action.payload;
    },
  },
});
export const { add, addSelectedMetrics } = metricsSlice.actions;
export default metricsSlice.reducer;
