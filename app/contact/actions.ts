'use server';

import { submitContact } from '@/lib/contact-service';
import type { ContactPayload } from '@/types/contact';

export async function submitContactAction(
  payload: ContactPayload,
): Promise<{ ok: true } | { ok: false }> {
  try {
    await submitContact(payload);
    return { ok: true };
  } catch {
    return { ok: false };
  }
}
