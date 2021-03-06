import React, { useState, useCallback } from 'react';
import AddTodoForm from 'components/AddTodoForm/AddTodoForm';
import { useDispatch } from 'react-redux';
import { addTodo, addTodoAsync } from 'redux/reducers/todosReducer';

export default function AddTodoFormContainer() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = useCallback(
    (e) => setInputValue(e.target.value),
    []
  );

  const handleAddFormSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (inputValue.trim()) {
        dispatch(addTodo(inputValue));
        setInputValue('');
      }
    },
    [dispatch, inputValue]
  );

  const handleAddFormSubmitAsync = useCallback(
    (e) => {
      e.preventDefault();
      // if (inputValue.trim()) {
      //   dispatch(addTodo(inputValue));
      //   setInputValue('');
      // }
      dispatch(addTodoAsync(inputValue));
    },
    [dispatch, inputValue]
  );

  return (
    <AddTodoForm
      inputValue={inputValue}
      onInputChange={handleInputChange}
      onSubmit={handleAddFormSubmit}
      onSubmitAsync={handleAddFormSubmitAsync}
    />
  );
}
