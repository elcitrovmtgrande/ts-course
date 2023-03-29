import React, { useEffect, useState, ChangeEvent } from 'react';
import { API } from './utils/Network';
import { Task } from './types';
import './App.css';

const TaskComponent = ({ content }: Task) => (
  <li>{content}</li>
);

function App() {
  const [loading, setLoading] = useState<boolean>(false);
  const [addLoading, setAddLoading] = useState<boolean>(false);
  const [taskName, setTaskName] = useState<string>('');
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);

      const response = await API.getTasks();
      const { tasks } = response;

      setTasks(tasks);
      setLoading(false);
    };
    fetchData();
  }, [setLoading, setTasks,]);

  function onInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setTaskName(event.target.value);
  }

  async function onAddTask(): Promise<void> {
    setAddLoading(true);
    const response = await API.postTask(taskName);
    const { task } = response;
    setTasks([...tasks, task]);
    setAddLoading(false);
  }

  return (
    <div className="App">
      <h1>Tasks</h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {tasks.map((task: Task, i: number) => (
            <TaskComponent key={String(i)} {...task} />
          ))}
        </ul>
      )}
      <div className="form">
        <input type="text" onChange={onInputChange} />
        <button onClick={onAddTask}>{addLoading ? 'Loading...' : 'Ajouter'}</button>
      </div>
    </div>
  );
}

export default App;
