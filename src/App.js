import './App.css';
import TodoItem from './components/TodoItem';

import { useSelector, useDispatch } from 'react-redux';
import { addTodo, removeTodo } from './slices/TodoSlice';
import { useState } from 'react';


function App() {
  const [input, setInput] = useState("");

  // Note that to access any of those states, you should access the reducer name that was specified in the store file like this:
  const count = useSelector((state) => state.todo.count);
  const todos = useSelector((state) => state.todo.todos);


  const dispatch = useDispatch();

  
  const handleAddTodo = (event) => {
    event.preventDefault();
    dispatch(addTodo(input));
  };

  const handleTodoDone = (id) => {
    dispatch(removeTodo(id));
  };

  return (
    <div className="App">
      <h1>TODO list</h1>
      <form className="App-form" onSubmit={handleAddTodo}>
        <input type="text" onInput={(event) => setInput(event.target.value)} />
        <button type="submit">+</button>
      </form>
      <div className="Todos">
        {count > 0 &&
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              text={todo.text}
              id={todo.id}
              onCheck={handleTodoDone}
            />
          ))}
        {count === 0 && <p>No todos</p>}
      </div>
    </div>
  );
}

export default App;
