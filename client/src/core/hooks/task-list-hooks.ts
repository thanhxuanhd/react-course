import axios from 'axios';
import { API_URL, TASK } from '../constants';

export async function GetTaskList() {
    const url = API_URL + TASK;
    return await axios.get(url).then(response => {
        return response.data;
    });
}
