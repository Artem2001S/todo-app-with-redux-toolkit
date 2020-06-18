import React from 'react';

export default function AddTodoForm({
  inputValue,
  onInputChange,
  onSubmit,
  onSubmitAsync,
}) {
  return (
    <form onSubmit={onSubmit}>
      <input value={inputValue} onChange={onInputChange} />
      <button>Add</button>
      <button type="button" onClick={onSubmitAsync}>
        Add async
      </button>
    </form>
  );
}
