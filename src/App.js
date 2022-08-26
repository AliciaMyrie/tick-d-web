import { useState } from 'react';
import TodoList from './components/TodoList';
import './App.css';
import AddTask from './components/AddTask';

function App() {
  const [tasklist, setTasklist] = useState()
  return (
    <>
    <h1>Tick'd</h1>
    <TodoList tasklist={tasklist} setTasklist={setTasklist}/>
    <AddTask setTasklist={setTasklist}/>
    </>
      
  );
}

export default App;
