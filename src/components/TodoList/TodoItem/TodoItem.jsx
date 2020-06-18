import React, { useCallback } from 'react';

export default function TodoItem({
  todoId,
  todoText,
  isDone,
  onToggle,
  onDelete,
}) {
  const handleDelete = useCallback(() => onDelete(todoId), [onDelete, todoId]);
  const handleToggle = useCallback(() => onToggle(todoId), [onToggle, todoId]);

  return (
    <div>
      <span
        onClick={handleToggle}
        style={{ textDecoration: isDone && 'line-through' }}
      >
        {todoText}
      </span>
      <span onClick={handleDelete} style={{ cursor: 'pointer' }}>
        &times;
      </span>
    </div>
  );
}
