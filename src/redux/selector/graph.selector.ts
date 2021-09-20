import { createSelector } from '@reduxjs/toolkit';

export const getGraphValues = (state: any) => state.graphStore.graph;

export const getGraphByType = (type: any) => createSelector(
  getGraphValues,
  (values) => values[type],
);
