import { useState } from "react";
import { createTask } from "../services/api";
import { useTaskStore } from "../store/taskStore";

export default function TaskForm() {
  const [title, setTitle] = useState("");
  const { addTask } = useTaskStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTask = await createTask(title);
    addTask(newTask);
    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Nouvelle tâche"
      />
      <button type="submit">Ajouter</button>
    </form>
  );
}