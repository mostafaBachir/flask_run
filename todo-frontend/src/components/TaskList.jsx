import { useEffect } from "react";
import { useTaskStore } from "../store/taskStore";
import { fetchTasks } from "../services/api";
import { useWebSocket } from "../services/websockets";
import TaskItem from "./TaskItem";

export default function TaskList() {
  const { tasks, setTasks } = useTaskStore();

  useEffect(() => {
    fetchTasks().then(setTasks);
  }, []);

  //useWebSocket(); // Active WebSockets

  return (
    <ul>
      {tasks.map((task) => (
        <TaskItem key={task.ID} task={task} />
      ))}
    </ul>
  );
}
