import type { PageLoad } from './$types';
import type { Tweet } from '$lib/types/tweet';


export const load: PageLoad = async ({ fetch }): Promise<{ tweets: Tweet[] }> => {
  try {
    const res = await fetch('http://localhost:8000/tweets');
    if (!res.ok) {
      
      throw new Error(`Failed to fetch tweets: ${res.statusText}`);
    }
    const tweets: Tweet[] = await res.json();
    return { tweets };
  } catch (error) {
    console.error('Error loading tweets:', error);

    return { tweets: [] };
  }
};