import axios from 'axios'

//base da URL = https://app.timmit.com.br/api/v1/usuarios, https://app.timmit.com.br/v2/api/usuario

const api = axios.create({
  baseURL: 'https://app.timmit.com.br/v2/api/usuario'
})

export default api