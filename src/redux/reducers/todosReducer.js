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

export const deleteTodo = createAction('DELETE_TODO');
export const toggleTodo = createAction('TOGGLE_TODO');

export default createReducer(initialState, {
  [addTodo]: (state, { payload }) => {
    state.todos.push({
      id: payload.id,
      todoText: payload.todoText,
      isDone: false,
    });
  },
  [deleteTodo]: (state, { payload }) => {
    state.todos = state.todos.filter((todo) => todo.id !== payload);
  },
  [toggleTodo]: (state, { payload }) => {
    state.todos = state.todos.map((todo) =>
      todo.id === payload ? { ...todo, isDone: !todo.isDone } : todo
    );
  },
});
