/* eslint-disable no-param-reassign */

import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
  errMessage: null,
  isLoaded: false,
};

const calcSlice = createSlice({
  name: 'cardData',
  initialState,
  reducers: {
    deleteCard: (state, { payload }) => (
      {
        ...state,
        data: state.data.filter((card) => card.id !== payload),
      }),
  },
});

export const {
  deleteCard,
} = calcSlice.actions;
export default calcSlice.reducer;
