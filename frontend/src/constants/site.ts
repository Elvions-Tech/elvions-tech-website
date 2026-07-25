export const SITE_NAME = 'Elvions Tech';
export const SITE_DESCRIPTION =
'Elvions Tech designs, builds, and scales intelligent software products for ambitious organizations.';

// Some preview and test runtimes do not expose Vite's import.meta.env object.
// Optional chaining preserves the Vite override while keeping the API client safe to initialize.
export const API_BASE_URL = import.meta.env?.VITE_API_URL ?? 'http://localhost:5000/api';
export const COMPANY_EMAIL = 'hello@elvionstech.com';