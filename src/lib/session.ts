'use client';

import { v4Fallback } from './utils';

const SESSION_KEY = 'pathfinder_session_id';
const ROADMAP_KEY = 'pathfinder_roadmap';

export function getSessionId(): string {
  if (typeof window === 'undefined') return '';
  let id = localStorage.getItem(SESSION_KEY);
  if (!id) {
    id = v4Fallback();
    localStorage.setItem(SESSION_KEY, id);
  }
  return id;
}

export function saveRoadmap(data: unknown): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem(ROADMAP_KEY, JSON.stringify(data));
}

export function getRoadmap(): unknown | null {
  if (typeof window === 'undefined') return null;
  const data = localStorage.getItem(ROADMAP_KEY);
  if (!data) return null;
  try {
    return JSON.parse(data);
  } catch {
    return null;
  }
}

export function clearSession(): void {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(SESSION_KEY);
  localStorage.removeItem(ROADMAP_KEY);
}
