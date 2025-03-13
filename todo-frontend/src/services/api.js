import axios from "axios";

const API_URL = "http://localhost:9988/tasks"; // Backend Fiber

export async function fetchTasks() {
  const res = await axios.get(API_URL);
  return res.data;
}

export async function createTask(title, description) {
  const res = await axios.post(API_URL, { title, description });
  return res.data;
}

export async function updateTask(id, done) {
  const res = await axios.put(`${API_URL}/${id}`, { done });
  return res.data;
}

export async function deleteTask(id) {
  await axios.delete(`${API_URL}/${id}`);
}