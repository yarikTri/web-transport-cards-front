// routeDetailsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const routeDetailedSlice = createSlice({
  name: 'routeDetailed',
  initialState: {
    routeDetailed: {},
  },
  reducers: {
    getRouteDetailedSlice: (state, action) => {
      state.routeDetailed = action.payload;
    },
  },
});

export const { getRouteDetailedSlice } = routeDetailedSlice.actions;
export default routeDetailedSlice.reducer;
