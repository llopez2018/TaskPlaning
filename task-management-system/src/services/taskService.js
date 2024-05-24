import axios from 'axios';

const API_URL = 'http://localhost:8080/api/tasks';

export const fetchTasks = () => {
    return axios.get(API_URL);
};

export const createTask = (task) => {
    return axios.post(API_URL, task);
};
