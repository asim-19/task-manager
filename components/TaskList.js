// components/TaskList.js
"use client"; // This enables client-side functionality

import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const TaskList = ({ initialTasks }) => {
  const [tasks, setTasks] = useState(initialTasks);
  const [task, setTask] = useState({ title: '', description: '', priority: 'medium' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((prev) => ({ ...prev, [name]: value }));
  };

  const addTask = () => {
    setTasks((prev) => [...prev, { ...task, id: uuidv4(), completed: false }]);
    setTask({ title: '', description: '', priority: 'medium' });
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((t) => t.id === id);
    setTask(taskToEdit);
    deleteTask(id);
  };

  const deleteTask = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  };

  const toggleCompletion = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Separate completed and pending tasks
  const pendingTasks = tasks.filter((task) => !task.completed);
  const completedTasks = tasks.filter((task) => task.completed);

  const sortedTasks = [...pendingTasks].sort((a, b) => {
    const priorities = { high: 1, medium: 2, low: 3 };
    return priorities[a.priority] - priorities[b.priority];
  });

  return (
    <div>
      <h2>Add Task</h2>
      <input name="title" value={task.title} onChange={handleChange} placeholder="Task Title" />
      <input name="description" value={task.description} onChange={handleChange} placeholder="Task Description" />
      <select name="priority" value={task.priority} onChange={handleChange}>
        <option value="high">High</option>
        <option value="medium">Medium</option>
        <option value="low">Low</option>
      </select>
      <button onClick={addTask}>Add Task</button>

      <h2>Pending Tasks</h2>
      {sortedTasks.map((task) => (
        <div key={task.id} style={{
          backgroundColor: task.priority === 'high' ? 'red' : task.priority === 'medium' ? 'yellow' : 'green',
          color: 'white',
          padding: '10px',
          margin: '5px 0',
          borderRadius: '5px',
        }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <p>Priority: {task.priority}</p>
          <button onClick={() => toggleCompletion(task.id)}>
            {task.completed ? 'Mark as Pending' : 'Mark as Completed'}
          </button>
          <button onClick={() => editTask(task.id)}>Edit</button>
          <button onClick={() => deleteTask(task.id)}>Delete</button>
        </div>
      ))}

      <h2>Completed Tasks</h2>
      {completedTasks.map((task) => (
        <div key={task.id} style={{
          backgroundColor: '#d3d3d3',
          padding: '10px',
          margin: '5px 0',
          borderRadius: '5px',
        }}>
          <h3>{task.title}</h3>
          <p>{task.description}</p>
          <button onClick={() => toggleCompletion(task.id)}>Mark as Pending</button>
        </div>
      ))}
    </div>
  );
};

export default TaskList;
