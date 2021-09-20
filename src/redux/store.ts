import { configureStore } from '@reduxjs/toolkit';
import graphReducer from './slice/graph.slice';
import metricReducer from './slice/metrics.slice';

export const store = configureStore({
  reducer: {
    graphStore: graphReducer,
    metricStore: metricReducer,
  },
});
