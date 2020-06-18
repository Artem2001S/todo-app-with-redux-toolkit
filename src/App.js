import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux/store';
import TodoListContainer from 'containers/TodoListContainer';
import AddTodoFormContainer from 'containers/AddTodoFormContainer';

function App() {
  return (
    <Provider store={store}>
      <AddTodoFormContainer />
      <TodoListContainer />
    </Provider>
  );
}

export default App;
