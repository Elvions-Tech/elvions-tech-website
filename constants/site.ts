export const SITE_NAME = 'Elvions Tech';

export const SITE_TAGLINE = "Technology built for what's next";

export const SITE_DESCRIPTION =
  'Elvions Tech designs, builds, and scales intelligent software products for ambitious organizations.';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.elvionstech.com';

export const COMPANY_EMAIL = 'hello@elvionstech.com';

/**
 * Server-only: never prefixed with NEXT_PUBLIC_, so it is not bundled to the client.
 * All requests to this API happen from Server Actions / Server Components.
 */
export const API_URL = process.env.API_URL ?? 'http://localhost:5000/api';

export const SITE_KEYWORDS = [
  'software development company',
  'e-commerce development',
  'AI chatbots',
  'ERP systems',
  'mobile app development',
  'custom software',
  'digital product studio',
];
