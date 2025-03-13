import { useTaskStore } from "../store/taskStore";
import { useEffect, useState } from "react";

export function useWebSocket() {
  useEffect(() => {
    const ws = new WebSocket("ws://localhost:8080/ws");

    ws.onmessage = (event) => {
      const { eventType, task } = JSON.parse(event.data);
      if (!task) return;

      const { addTask, updateTask, removeTask } = useTaskStore.getState();

      if (eventType === "new_task") addTask(task);
      if (eventType === "update_task") updateTask(task);
      if (eventType === "delete_task") removeTask(task.id);
    };

    return () => ws.close();
  }, []);
}