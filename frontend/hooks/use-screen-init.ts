'use client';

import { useMemo } from 'react';
import { manifest } from '@/lib/canvas-manifest';

interface ScreenState {
  status?: string;
}

/**
 * Reads the `mp_screen` query param (set by the Magic Patterns canvas preview)
 * to pre-populate a screen's local state, e.g. previewing the contact
 * confirmation state directly via URL.
 */
export function useScreenInit(): ScreenState {
  return useMemo(() => {
    if (typeof window === 'undefined') return {};
    const screenId = new URLSearchParams(window.location.search).get('mp_screen');
    if (!screenId) return {};
    const screens = manifest.screens as Record<string, { state?: ScreenState }>;
    return screens[screenId]?.state ?? {};
  }, []);
}
