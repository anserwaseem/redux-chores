import { createSlice, nanoid } from '@reduxjs/toolkit';

const createHuman = (name) => ({
  id: nanoid(),
  name,
  taskIds: []
});

const initialState = [
  createHuman('Anser'),
  createHuman('Waseem'),
  createHuman('Jerry'),
  createHuman('Tom')
];

export const humansSlice = createSlice({
  name: 'humans',
  initialState,
  reducers: {
    add: (state, action) => {
      state.push(createHuman(action.payload));
    }
  }
});
