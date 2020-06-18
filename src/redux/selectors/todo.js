import { createSelector } from 'reselect';

const getTodosState = (state) => state.todosState;

export const getTodos = createSelector(
  [getTodosState],
  (todosState) => todosState.todos
);
