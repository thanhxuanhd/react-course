import axios from 'axios';
import { API_URL, USER } from '../constants';

export async function GetUser(id: string) {
    const url = API_URL + USER + `/${id}`;
    return await axios.get(url).then(response => {
        return response.data;
    })
}