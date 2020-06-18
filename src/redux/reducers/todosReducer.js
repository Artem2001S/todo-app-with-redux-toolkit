import { createReducer, createAction } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

let nextTodoId = 0;
export const addTodo = createAction('ADD_TODO', (todoText) => {
  return {
    payload: { id: nextTodoId++, todoText },
  };
});

export default createReducer(initialState, {
  [addTodo.type]: (state, { payload }) => {
    state.todos.push({ id: payload.id, todoText: payload.todoText });
  },
});
