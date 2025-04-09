import { createSlice } from '@reduxjs/toolkit';

const PostSlice = createSlice({
  name: 'post',
  initialState: [],
  reducers: {
    setPost: (state, action) => {
      state.push({
        content: action.payload.content,
        image: action.payload.image,
        timestamp: new Date().toISOString()
      });
    }
  }
});

export const { setPost } = PostSlice.actions;
export default PostSlice.reducer;
