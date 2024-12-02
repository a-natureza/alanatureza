import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  activeItem: null,
};

const navbarSlice = createSlice({
  name: 'navbar',
  initialState,
  reducers: {
    setActiveItem(state, action) {
      state.activeItem = action.payload;
    },
  },
});

export const { setActiveItem } = navbarSlice.actions;
export default navbarSlice.reducer;