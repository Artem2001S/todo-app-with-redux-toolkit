import React from 'react';

export default function AddTodoForm({ inputValue, onInputChange, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <input value={inputValue} onChange={onInputChange} />
      <button onClick={onSubmit}>Add</button>
    </form>
  );
}
