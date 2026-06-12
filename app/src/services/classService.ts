import type { ClassDto } from '../data/types';

const API_BASE_URL = 'http://localhost:7085/api/classes';

export async function getClasses(): Promise<ClassDto[]> {
  const response = await fetch(`${API_BASE_URL}`);

  if (!response.ok) {
    throw new Error('Failed to fetch classes');
  }

  return response.json();
}