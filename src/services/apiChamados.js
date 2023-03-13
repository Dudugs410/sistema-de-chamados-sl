import axios from 'axios';

//base da URL = https://Link-da-API-aqui

const apiChamados = axios.create({
    baseURL: '../../mock/chamados'
});

export default apiChamados;