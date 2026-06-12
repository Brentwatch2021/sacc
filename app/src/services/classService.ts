import type { ClassDto } from '../data/types';

const API_BASE_URL = 'https://proud-mouse-865e.wirrem1990.workers.dev/api/classes';

export async function getClasses(): Promise<ClassDto[]> {
  const response = await fetch(`${API_BASE_URL}`);

  if (!response.ok) {
    throw new Error('Failed to fetch classes');
  }

  return response.json();
}