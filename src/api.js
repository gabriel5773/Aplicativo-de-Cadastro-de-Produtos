import axios from 'axios';

const api = axios.create({
  baseURL: '/api', // Agora chama a API local da Vercel que faz o proxy
});

export default api;
