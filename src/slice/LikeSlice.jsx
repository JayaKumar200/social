import { createSlice } from '@reduxjs/toolkit';

const initialState = {};

const LikeSlice = createSlice({
  name: 'likes',
  initialState,
  reducers: {
    setLike: (state, action) => {
      const id = action.payload;
      if (state[id]) {
        state[id] += 1;
      } else {
        state[id] = 1;
      }
    },
  },
});

export const { setLike } = LikeSlice.actions;
export default LikeSlice.reducer;
