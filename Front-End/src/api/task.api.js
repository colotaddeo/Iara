import axios from "axios";

export const createTaskRequest = async (task) => 
    await axios.post("https://localhost:4000/tasks", task)