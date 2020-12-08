import axios from 'axios';
import { API_URL, DASHBOARD } from '../constants';

export async function GetCardInfo() {
    const url = API_URL + DASHBOARD;
    return await axios.get(url).then(response => {
        return response.data;
    });
}