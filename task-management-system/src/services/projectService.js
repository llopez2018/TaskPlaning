import axios from 'axios';

const API_URL = 'http://localhost:8080/api/projects';

export const fetchProjects = () => {
    return axios.get(API_URL);
};

export const createProject = (project) => {
    return axios.post(API_URL, project);
};
