import { createSlice, nanoid } from '@reduxjs/toolkit';
import { tasksSlice } from './tasksSlice';

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
  },
  extraReducers: (builder) => {
    // builder tells this slice to watch for additional action types
    builder.addCase(tasksSlice.actions.assignToUser, (state, action) => {
      for (const human of state) {
        if (human.id === action.payload.humanId)
          human.taskIds.push(action.payload.taskId);
        else
          human.taskIds = human.taskIds?.filter(
            (id) => id !== action.payload.taskId
          );
      }
    });
  }
});
