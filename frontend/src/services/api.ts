import axios from 'axios';
import { API_BASE_URL } from '../constants/site';

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 10000,
  headers: { 'Content-Type': 'application/json' }
});

api.interceptors.response.use(
  (response) => response,
  (error: unknown) => Promise.reject(error instanceof Error ? error : new Error('Request failed.'))
);