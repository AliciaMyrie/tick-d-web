import { Input } from 'antd';
import { useState } from 'react';
const { Search } = Input;

export default function AddTask({ setTasklist }) {
  const [task, setTask] = useState('');
  const addTask = () => {
    fetch('https://tick-d-api-am.web.app/tasks'	,{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ task, done: false })
    })
      .then((results) => results.json())
      .then(data => {
        setTasklist(data);
        setTask('');
      })
      .catch(console.error);
  };
  return (
    <Search
      value={task}
      onChange={e => setTask(e.target.value)}
      enterButton="Add"
      size="Large"
      onSearch={addTask}
    />
  );
}
