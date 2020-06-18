import React from 'react';
import TodoList from 'components/TodoList/TodoList';
import { useSelector, useDispatch } from 'react-redux';
import { getTodos } from 'redux/selectors/todo';
import { deleteTodo, toggleTodo } from 'redux/reducers/todosReducer';
import { useCallback } from 'react';
import { getIsLoading } from 'redux/selectors/UIData';
import Loader from 'components/Loader';

export default function TodoListContainer() {
  const dispatch = useDispatch();

  const todoList = useSelector(getTodos);
  const isLoading = useSelector(getIsLoading);

  const handleDelete = useCallback((todoId) => dispatch(deleteTodo(todoId)), [
    dispatch,
  ]);

  const handleToggle = useCallback((todoId) => dispatch(toggleTodo(todoId)), [
    dispatch,
  ]);

  return (
    <>
      {isLoading && <Loader />}
      <TodoList
        todoList={todoList}
        onDelete={handleDelete}
        onToggle={handleToggle}
      />
    </>
  );
}
