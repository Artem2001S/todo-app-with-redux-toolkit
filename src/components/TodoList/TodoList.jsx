import React from 'react';

export default function TodoList({ todoList }) {
  return (
    <div>
      <h2>Todos</h2>
      {todoList.map((todo) => (
        <div key={todo.id}>{todo.todoText}</div>
      ))}
    </div>
  );
}
