import axios from 'axios';

const API_URL = 'http://localhost:8080/api/users';

export const fetchUsers = () => {
    return axios.get(API_URL);
};

export const createUser = (user) => {
    return axios.post(API_URL, user);
};
