import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/constants/site';

const ROUTES: Array<{ path: string; priority: number }> = [
  { path: '', priority: 1 },
  { path: '/services', priority: 0.8 },
  { path: '/products', priority: 0.8 },
  { path: '/news', priority: 0.6 },
  { path: '/about', priority: 0.7 },
  { path: '/contact', priority: 0.7 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return ROUTES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: 'weekly',
    priority,
  }));
}
