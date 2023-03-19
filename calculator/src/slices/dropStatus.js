/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isDropped: false,
};

const dropSlice = createSlice({
  name: 'cardData',
  initialState,
  reducers: {
    changeDropStatus: (state, { payload }) => {
      state.isDropped = payload;
    },
  },
});

export const { changeDropStatus } = dropSlice.actions;
export default dropSlice.reducer;
