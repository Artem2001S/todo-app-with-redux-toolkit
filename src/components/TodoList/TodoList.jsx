import React from 'react';
import TodoItem from './TodoItem/TodoItem';

export default function TodoList({ todoList, onToggle, onDelete }) {
  return (
    <div>
      <h2>Todos</h2>
      {todoList.map((todo) => (
        <TodoItem
          key={todo.id}
          todoId={todo.id}
          isDone={todo.isDone}
          todoText={todo.todoText}
          onToggle={onToggle}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
}
