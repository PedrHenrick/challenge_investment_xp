import axios from 'axios';

const api = axios.create({
  baseURL: process.env.ROUTE_AXIOS,
});

export default api;
