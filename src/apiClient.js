import axios from 'axios';

export const baseURL = 'http://emphasoft-test-assignment.herokuapp.com/';


export const apiClient = axios.create({
  baseURL
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Token ${token}`;
    }
    return config;
});


