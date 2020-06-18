import React from 'react';
import TodoList from 'components/TodoList/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from 'redux/selectors/todo';
import { deleteTodo, toggleTodo } from 'redux/reducers/todosReducer';
import { useCallback } from 'react';

export default function TodoListContainer() {
  const dispatch = useDispatch();

  const todoList = useSelector(getTodos);
  const handleDelete = useCallback((todoId) => dispatch(deleteTodo(todoId)), [
    dispatch,
  ]);

  const handleToggle = useCallback((todoId) => dispatch(toggleTodo(todoId)), [
    dispatch,
  ]);

  return (
    <TodoList
      todoList={todoList}
      onDelete={handleDelete}
      onToggle={handleToggle}
    />
  );
}
