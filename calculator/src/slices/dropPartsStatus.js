/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startDrop: false,
  currentParts: [
    { id: 1, dropped: false },
    { id: 2, dropped: false },

  ],
};

const dropPartsSlice = createSlice({
  name: 'dropParts',
  initialState,
  reducers: {
    changeStartStatus: (state, { payload }) => {
      state.startDrop = payload;
    },
    changeDropPartStatus: (state, { payload }) => {
      state.currentParts.find((el) => el.id === payload).dropped = true;
    },
  },
});

export const { changeStartStatus, changeDropPartStatus } = dropPartsSlice.actions;
export default dropPartsSlice.reducer;
