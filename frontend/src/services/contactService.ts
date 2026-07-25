import { api } from './api';

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export async function submitContact(payload: ContactPayload) {
  const { data } = await api.post('/contact', payload);
  return data;
}