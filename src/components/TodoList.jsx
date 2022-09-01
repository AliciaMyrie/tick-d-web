import { useEffect, useState } from 'react';
import { List, Alert } from 'antd';
import TodoListCard from "./TodoListCard"

export default function TodoList({ tasklist, setTasklist, token }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState();
  // call the api and use setTasklist to fill in state...
  useEffect(() => {
    fetch("https://tick-d-api-am.web.app/tasks", {
        headers: {
            "Authorization": token,
        }
    })
      .then(results => results.json())
      .then(tasks => {
        setTasklist(tasks);
        setLoading(false);
        setError('');
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      })
  }, [token , setTasklist, setLoading]);
  // if (!tasklist) {
  //   return <h2>No tasks to complete!</h2>
  // }
  return (
    <>
      {error && <Alert
        message="Error"
        description={error}
        type="error"
        showIcon
      />}
      <div className='task-list'>
        <List
          dataSource={tasklist}
          loading={loading}
          renderItem={(item) => (
            <TodoListCard key={item.id} item={item} />
            // <List.Item key={item.id}>
            //   <List.Item.Meta
            //     avatar={<Switch onChange ={() => handleSwitch checked={item.done} />}
            //     title={<p>{item.task}</p>}
            //   />
            // </List.Item>
          )}
        />
      </div>
    </>
  )
}