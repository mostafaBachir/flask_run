import { updateTask, deleteTask } from "../services/api";
import { useTaskStore } from "../store/taskStore";

export default function TaskItem({ task }) {
  const { removeTask } = useTaskStore();

  return (
    <li>
      <input
        type="checkbox"
        checked={task.done}
        onChange={() => updateTask(task.ID, !task.done)}
      />
            <span>{task.ID}###</span>

            <span>{task.title}</span>
            <button onClick={() => deleteTask(task.ID).then(() => removeTask(task.ID))}>
        ❌
      </button>
    </li>
  );
}