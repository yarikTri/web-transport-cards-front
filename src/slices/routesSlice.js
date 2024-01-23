import { createSlice } from '@reduxjs/toolkit';

const routesSlice = createSlice({
  name: 'routes',
  initialState: {
    searchValue: '',
    routes: [],
    loading: false,
  },
  reducers: {
    setSearchValue: (state, action) => {
      return { ...state, searchValue: action.payload };
    },
    setRoutes: (state, action) => {
      return { ...state, routes: action.payload };
    },
    setLoading: (state, action) => {
      return { ...state, loading: action.payload };
    },
  },
});

export const {
  setSearchValue,
  setRoutes,
  setLoading,
} = routesSlice.actions;

export default routesSlice.reducer;
