import axios from 'axios';
import { API_URL, TASK } from '../constants';
import { ITask } from '../interfaces/task-list';

export async function GetTaskItemDetai(id: string) {
    const url = API_URL + TASK + `/${id}`;
    return await axios.get(url).then(response => {
        return response.data;
    });
}

export async function UpdateTaskItem(task: ITask) {
    const url = API_URL + TASK + `/${task.Id}`;
    return await axios.put(url, task).then(response => {
        return response.data;
    });
}