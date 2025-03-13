import TaskList from "../components/TaskList";
import TaskForm from "../components/TaskForm";

export default function Home() {
  return (
    <div>
      <h1>To-Do List en Temps Réel</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
}
