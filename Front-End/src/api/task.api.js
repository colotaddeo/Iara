import axios from "axios";
import form from '../components/pages/logInPage/logIn'

const URI = "https://localhost:4000/tasks"

export const createTaskRequest = async (task) => {
    await axios.post(URI, {
        
    })
}
    