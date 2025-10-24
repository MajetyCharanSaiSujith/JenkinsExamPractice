import axios from "axios";
import config from "../components/config"; // adjust path as needed

const API_URL = `${config.url}/api/tasks`;

class TaskService {
  getAllTasks() {
    return axios.get(`${API_URL}/all`);
  }

  getTaskById(id) {
    return axios.get(`${API_URL}/get/${id}`);
  }

  createTask(task) {
    console.log("Backend API base URL:", API_URL);
    return axios.post(`${API_URL}/add`, task);
  }

  updateTask(id, task) {
    return axios.put(`${API_URL}/update/${id}`, task);
  }

  updateStatus(id, task) {
    return axios.put(`${API_URL}/updatestatus/${id}`, task);
  }

  deleteTask(id) {
    return axios.delete(`${API_URL}/delete/${id}`);
  }
}

export default new TaskService();
