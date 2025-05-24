import { createSlice } from '@reduxjs/toolkit';

interface NavState {
  expanded: boolean;
}

const initialState: NavState = {
  expanded: false,
};

const navSlice = createSlice({
  name: 'nav',
  initialState,
  reducers: {
    toggleNav: (state) => {
      state.expanded = !state.expanded;
    },
    setExpandedNav: (state, action) => {
      state.expanded = action.payload;
    },
  },
});

export const { toggleNav, setExpandedNav } = navSlice.actions;
export default navSlice.reducer;
