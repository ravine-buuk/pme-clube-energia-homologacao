import axios from 'axios';

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL as string,
  headers: {
    Authorization:
      '1a6f22c26e3c7516b8978903cae4af6ea9a4e4c49bc9a34a8e4245ee90ddd61b',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Authorization',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS, PUT, PATCH, DELETE',
    'Content-Type': 'application/json;charset=UTF-8',
    'X-Hostname':
      typeof window !== 'undefined' ? window.location.hostname : null,
  },
  withCredentials: false,
});

export default api;
