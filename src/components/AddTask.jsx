import { useState } from 'react';
import { Input } from 'antd';
const { Search } = Input;

export default function AddTask({ setTasklist, token }) {
  const [task, setTask] = useState('');
  const addTask = () => {
    fetch('https://tick-d-api-am.web.app/tasks', {
    // fetch('http://localhost:5555/tasks', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': token,
      },
      body: JSON.stringify({ task, done: false })
    })
      .then(results => results.json())
      .then(data => {
        setTasklist(data);
        setTask('');
      })
      .catch(console.error);
  }
  return (
    <div className='add-task'>
      <Search
        value={task}
        onChange={e => setTask(e.target.value)}
        enterButton="Add"
        size='Large'
        onSearch={addTask}
      />
    </div>
  )
}