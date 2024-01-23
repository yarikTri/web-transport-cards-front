// draftSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  draftItems: [],
  draft_id: null,
  routesCount: 0,
};

const draftSlice = createSlice({
  name: 'draft',
  initialState,
  reducers: {
    setDraftItem: (state, action) => {
      state.draftItems = action.payload;
      state.routesCount = state.draftItems ? state.draftItems.length : 0;
    },
    setDraftId: (state, action) => {
      state.draft_id = action.payload;
    },
    resetDraft: (state) => {
      return { ...initialState };
    },
  },
});

export const { setDraftItem, setDraftId, resetDraft } = draftSlice.actions;

export default draftSlice.reducer;
