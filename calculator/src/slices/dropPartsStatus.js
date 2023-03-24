/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  startDrop: false,
  dragging: false,
  currentParts: [
    { id: 1, dropped: false, deleted: false },
  ],
};

const dropPartsSlice = createSlice({
  name: 'dropParts',
  initialState,
  reducers: {
    changeStartStatus: (state, { payload }) => {
      state.startDrop = payload;
    },
    changeDraggingStatus: (state, { payload }) => {
      state.dragging = payload;
    },
    addParts: (state, { payload }) => {
      if (payload === 1) {
        state.currentParts[0].dropped = true;
      } else {
        state.currentParts.push({ id: payload, dropped: true, deleted: false });
      }
    },
    deleteParts: (state, { payload }) => {
      const item = state.currentParts.find((el) => el.id === payload);
      item.deleted = true;
    },
    swapParts: (state, { payload }) => {
      state.currentParts = state.currentParts.map((el) => {
        if (el === payload.dragIndex) {
          return payload.hoverIndex;
        }
        if (el === payload.hoverIndex) {
          return payload.dragIndex;
        }
        return el;
      });
    },
  },
});

export const {
  changeStartStatus,
  changeDraggingStatus,
  addParts,
  deleteParts,
  swapParts,
} = dropPartsSlice.actions;
export default dropPartsSlice.reducer;
