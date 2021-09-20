import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  graph: {
    casingPressure: [],
    oilTemp: [],
    tubingPressure: [],
    flareTemp: [],
    waterTemp: [],
    injValveOpen: [],
  },
};

export const graphSlice = createSlice({
  name: 'graph',
  initialState,
  reducers: {
    add: (state: any, action: any) => {
      if (state.graph[action.payload.type].length > 0) {
        state.graph[action.payload.type] = [...state.graph[action.payload.type], {
          date: action.payload.date,
          [action.payload.type]: action.payload.value,
        }];
      } else {
        state.graph[action.payload.type] = [{
          date: action.payload.date,
          [action.payload.type]: action.payload.value,
        }];
      }
    },
  },
});

export const { add } = graphSlice.actions;
export default graphSlice.reducer;
