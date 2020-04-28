import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import './scss/App.scss';


function App() {
  return (
    <div className="App">
      <h1 className="Todo">Todo</h1>
      <AddTodo />
      <TodoList />
    </div>
  );
}

export default App;
