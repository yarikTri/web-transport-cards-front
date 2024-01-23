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
    setRouteField: (state, action) => {
      const { fieldName, fieldValue } = action.payload;
      state.routeDetailed[fieldName] = fieldValue;
    },
    toInitState: (state) => {
      state.routeDetailed = {};
      state.routeDetailed.name = null;
      state.routeDetailed.start_time = null;
      state.routeDetailed.end_time = null;
      state.routeDetailed.start_station = null;
      state.routeDetailed.end_station = null;
      state.routeDetailed.interval_minutes = null;
      state.routeDetailed.capacity = null;
      state.routeDetailed.description = null;
      state.routeDetailed.image = null;
    },
  },
});

export const { getRouteDetailedSlice, setRouteField, toInitState } = routeDetailedSlice.actions;
export default routeDetailedSlice.reducer;
