import { createSelector } from '@reduxjs/toolkit';

const getUIDataState = (state) => state.UIDataState;

export const getIsLoading = createSelector(
  [getUIDataState],
  (UIDataState) => UIDataState.isLoading
);
