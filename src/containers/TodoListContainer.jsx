import React from 'react';
import TodoList from 'components/TodoList/TodoList';
import { useSelector } from 'react-redux';
import { getTodos } from 'redux/selectors/todo';

export default function TodoListContainer() {
  const todoList = useSelector(getTodos);

  return <TodoList todoList={todoList} />;
}
