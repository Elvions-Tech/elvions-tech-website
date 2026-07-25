import { api } from './api';

export interface CatalogItem {
  _id: string;
  title: string;
  description: string;
  slug: string;
}

export async function getServices() {
  const { data } = await api.get<CatalogItem[]>('/services');
  return data;
}

export async function getProducts() {
  const { data } = await api.get<CatalogItem[]>('/products');
  return data;
}

export async function getNews() {
  const { data } = await api.get<CatalogItem[]>('/news');
  return data;
}