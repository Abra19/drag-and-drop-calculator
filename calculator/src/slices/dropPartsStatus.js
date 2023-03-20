/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  dropped: false,
  dragging: false,
  currentParts: [],
};

const dropPartsSlice = createSlice({
  name: 'partsStatus',
  initialState,
  reducers: {
    changeDropPartStatus: (state, { payload }) => {
      state.dropped = payload;
    },
    changeDragPartStatus: (state, { payload }) => {
      console.log(payload, 'drag');
      state.dragging = payload;
    },
    addPart: (state, { payload }) => {
      state.currentParts.push(payload);
    },
  },
});

export const {
  changeDropPartStatus,
  changeDragPartStatus,
  addPart,
} = dropPartsSlice.actions;
export default dropPartsSlice.reducer;
