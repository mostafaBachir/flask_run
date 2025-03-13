import {create} from "zustand";

export const useTaskStore = create((set) => ({
  tasks: [],
  setTasks: (newTasks) => set({ tasks: newTasks }),
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  updateTask: (updatedTask,value) => {
    console.log("Mise à jour de la tâche :", updatedTask); // Exemple de code avant set

    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.ID === updatedTask.ID ? updatedTask : task
      ),
    }));
  },
    
  removeTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.ID !== taskId),
    })),
}));
