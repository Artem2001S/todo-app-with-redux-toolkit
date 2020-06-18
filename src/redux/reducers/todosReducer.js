import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

let nextTodoId = 0;

const todosSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: {
      reducer(state, { payload }) {
        state.todos.push({
          id: payload.id,
          todoText: payload.todoText,
          isDone: false,
        });
      },
      prepare(todoText) {
        return { payload: { id: nextTodoId++, todoText } };
      },
    },

    deleteTodo: (state, { payload }) => {
      state.todos = state.todos.filter((todo) => todo.id !== payload);
    },

    toggleTodo: (state, { payload }) => {
      state.todos = state.todos.map((todo) =>
        todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
      );
    },
  },
});

export default todosSlice.reducer;
export const { addTodo, deleteTodo, toggleTodo } = todosSlice.actions;
