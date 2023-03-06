import axios from 'axios';

//base da URL = https://salvatore/v1/api/usuarios

const api = axios.create({
    baseURL: 'https://salvatore/v1/api/usuarios'
});

export default api;
