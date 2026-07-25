import 'server-only';
import { API_URL } from '@/constants/site';
import type { ContactPayload } from '@/types/contact';

export async function submitContact(payload: ContactPayload): Promise<void> {
  const response = await fetch(`${API_URL}/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`Contact request failed with status ${response.status}`);
  }
}
