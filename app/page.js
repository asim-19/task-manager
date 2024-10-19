


// app/page.js
import { tasks } from '../data/tasks';
import TaskList from '../components/TaskList';

export default function Home() {
  return ( 
  <TaskList initialTasks={tasks} />

  );
}
