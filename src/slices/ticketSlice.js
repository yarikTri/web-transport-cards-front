// ticketSlice.js

import { createSlice } from '@reduxjs/toolkit';

const ticketSlice = createSlice({
  name: 'tickets',
  initialState: {
    tickets: [],
  },
  reducers: {
    getTicketsSuccess: (state, action) => {
      state.tickets = action.payload;
    },
  },
});

export const { getTicketsSuccess } = ticketSlice.actions;

export default ticketSlice.reducer;
