import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "todos",
  initialState: [
    { id: 1, text: "Update task tracker and share daily progress.", completed: false },
    { id: 2, text: "Work on assigned modules and push code regularly.", completed: true },
    { id: 3, text: "Learn and improve project-related skills.", completed: false },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push({ id: Date.now(), text: action.payload, completed: false });
    },
    toggleComplete: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) todo.completed = !todo.completed;
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
  },
});

export const { addTodo, toggleComplete, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;
