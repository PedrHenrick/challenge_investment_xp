import axios from 'axios';

const api = axios.create({
  baseURL: process.env.ROUTE_AXIOS || 'http://localhost:3001/ativos/update',
});

export default api;
