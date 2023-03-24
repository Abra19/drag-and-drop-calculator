/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import _ from 'lodash';

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
      const dragEl = state.currentParts.find((el) => el.id === payload.dragId);
      const hoverEl = state.currentParts.find((el) => el.id === payload.hoverId);
      state.currentParts = state.currentParts.map((el) => {
        if (_.isEqual(el, dragEl)) {
          return hoverEl;
        }
        if (_.isEqual(el, hoverEl)) {
          return dragEl;
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
