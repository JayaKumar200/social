import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  Command: [],
};

const Command = createSlice({
  name: 'command',
  initialState,
  reducers: {
    setCommand: (state, action) => {
      state.Command = [...state.Command, action.payload]; // Correct way to append
    },
  },
});

export const { setCommand } = Command.actions;
export default Command.reducer;
