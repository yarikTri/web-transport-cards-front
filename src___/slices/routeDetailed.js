// modelingsDetailsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const routeDetailedSlice = createSlice({
  name: 'routeDetailed',
  initialState: {
    details: {},
  },
  reducers: {
    getRouteDetailedSlice: (state, action) => {
      state.details = action.payload;
    },
  },
});

export const { getRouteDetailedSlice } = routeDetailedSlice.actions;
export default routeDetailedSlice.reducer;